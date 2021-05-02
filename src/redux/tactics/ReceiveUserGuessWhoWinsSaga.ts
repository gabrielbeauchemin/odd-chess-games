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
    yield put(fetchRandomWhoWinsTacticsAction(20));
  }
  if (isUserEvaluationValid(action.isWhiteWinning, currentTactic)) {
    action.incrementScore();
    message.success(
      `Correct! The engine evaluation for this position is ${evalToString(
        currentTactic.eval,
        currentTactic
      )}.`,
      6
    );
    yield put(popWhoWinsTacticsAction());
  } else {
    action.onUserGuessFailure(
      `Game over! The engine evaluation for this position is ${evalToString(
        currentTactic.eval,
        currentTactic
      )}.`
    );
  }
}

function isUserEvaluationValid(
  doUserThinkWhiteWon: boolean,
  tactic: WhoWinsModel
) {
  //For stockfish, the evaluation is relative to the camp that has to play
  const oppositeSideWon = parseInt(tactic.eval.replace("#", "")) < 0;
  const isWhiteCamp = tactic.fen.split(" ")[1] == "w";
  const doWhiteWon =
    (isWhiteCamp === true && oppositeSideWon === false) ||
    (isWhiteCamp === false && oppositeSideWon === true);
  return doUserThinkWhiteWon === doWhiteWon;
}

function evalToString(evaluation: string, tactic: WhoWinsModel) {
  //For stockfish, the evaluation is relative to the camp that has to play
  const isWhiteCamp = tactic.fen.split(" ")[1] == "w";
  if (evaluation.includes("#")) {
    if (
      (evaluation.includes("-") && isWhiteCamp) ||
      (evaluation.includes("-") === false && isWhiteCamp === false)
    ) {
      return `mat in ${evaluation.replace("#-", "")} for black`;
    }
    return `mat in ${evaluation.replace("#", "")} for white`;
  }
  if (isWhiteCamp === false) {
    return (-1 * parseFloat(evaluation)) / 100;
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
