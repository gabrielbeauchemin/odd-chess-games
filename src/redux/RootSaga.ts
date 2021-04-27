import { all } from "redux-saga/effects";
import { watchFetchIsItDrawTacticsSaga } from "./tactics/FetchIsItDrawTacticsSaga";
import watchFetchRandomWhoWinsTacticsSaga from "./tactics/FetchRandomWhoWinsTacticsSaga";
import { watchReceiveUserGuessIsItDrawSaga } from "./tactics/ReceiveUserGuessIsItDrawSaga";
import watchReceiveUserGuessWhoWinsSaga from "./tactics/ReceiveUserGuessWhoWinsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRandomWhoWinsTacticsSaga(),
    watchReceiveUserGuessWhoWinsSaga(),
    watchFetchIsItDrawTacticsSaga(),
    watchReceiveUserGuessIsItDrawSaga(),
  ]);
}
