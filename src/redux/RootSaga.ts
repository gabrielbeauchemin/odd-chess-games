import { all } from "redux-saga/effects";
import watchFetchRandomWhoWinsTacticsSaga from "./tactics/FetchRandomWhoWinsTacticsSaga";
import watchReceiveUserGuessWhoWinsSaga from "./tactics/ReceiveUserGuessWhoWinsSaga";

export default function* rootSaga() {
  yield all([watchFetchRandomWhoWinsTacticsSaga(), watchReceiveUserGuessWhoWinsSaga()]);
}
