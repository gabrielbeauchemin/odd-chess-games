import {
    fetchRandomWhoWinsTacticsAction,
    popWhoWinsTacticsAction,
  ReceiveUserGuessWhoWinsAction,
  RECEIVE_USER_GUESS_WHO_WINS_ACTION,
} from "./WhoWinsTacticsActions";
import { put, takeEvery, select} from "redux-saga/effects";
import {WhoWinsModel} from "./WhoWinsModel";
import {message} from "antd";

function* receiveUserGuessWhoWinsSaga(action: ReceiveUserGuessWhoWinsAction) {
    const tactics: WhoWinsModel[] = yield select(state => state.tactics.whoWins.all); 
    const currentTactic: WhoWinsModel = yield select(state => state.tactics.whoWins.current);
    if(tactics.length < 10){
        put(fetchRandomWhoWinsTacticsAction((20)));
    }
    const whiteWon = currentTactic.eval >= 0;
    if(action.isWhiteWinning == whiteWon){
        action.incrementScore();
        message.success(`Correct! The engine evaluation for this position was ${currentTactic.eval / 100}.`)
        yield put(popWhoWinsTacticsAction());
    }
    else{
        action.onUserGuessFailure(`Game over! The engine evaluation for this position was ${currentTactic.eval / 100}.`)
    }
}

function* watchReceiveUserGuessWhoWinsSaga(){
  yield takeEvery(
    RECEIVE_USER_GUESS_WHO_WINS_ACTION,
    receiveUserGuessWhoWinsSaga
  );
}

export default watchReceiveUserGuessWhoWinsSaga;
