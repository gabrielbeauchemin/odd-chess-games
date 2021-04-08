import {
  fetchRandomWhoWinsTacticsAction,
  popWhoWinsTacticsAction,
  ReceiveUserGuessWhoWinsAction,
  RECEIVE_USER_GUESS_WHO_WINS_ACTION,
} from "./WhoWinsTacticsActions";
import { put, takeEvery, select } from "redux-saga/effects";
import { WhoWinsModel } from "./WhoWinsModel";
import { message } from "antd";

function* receiveUserGuessWhoWinsSaga(action: ReceiveUserGuessWhoWinsAction) {
  const tactics: WhoWinsModel[] = yield select(
    (state) => state.tactics.whoWins.all
  );
  const currentTactic: WhoWinsModel = yield select(
    (state) => state.tactics.whoWins.current
  );
  if (tactics.length < 10) {
    put(fetchRandomWhoWinsTacticsAction(20));
  }
  if (isUserEvaluationValid(action.isWhiteWinning, currentTactic.eval)) {
    action.incrementScore();
    message.success(
      `Correct! The engine evaluation for this position was ${evalToString(
        currentTactic.eval
      )}.`
    );
    yield put(popWhoWinsTacticsAction());
  } else {
    action.onUserGuessFailure(
      `Game over! The engine evaluation for this position was ${evalToString(
        currentTactic.eval
      )}.`
    );
  }
}

function isUserEvaluationValid(doUserThinkWhiteWon: boolean, realEval: string) {
  if (realEval.includes("#")) {
    return realEval.includes("-") !== doUserThinkWhiteWon;
  }
  const doWhiteWon = parseInt(realEval) >= 0;
  return doUserThinkWhiteWon === doWhiteWon;
}

function evalToString(evaluation: string) {
  if (evaluation.includes("#")) {
    if (evaluation.includes("-")) {
      return `mat in ${evaluation.replace("#-", "")} for black`;
    }
    return `mat in ${evaluation.replace("#", "")} for white`;
  }
  return parseFloat(evaluation) / 100;
}

function* watchReceiveUserGuessWhoWinsSaga() {
  yield takeEvery(
    RECEIVE_USER_GUESS_WHO_WINS_ACTION,
    receiveUserGuessWhoWinsSaga
  );
}

export default watchReceiveUserGuessWhoWinsSaga;
