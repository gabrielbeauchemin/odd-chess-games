import { all } from "redux-saga/effects";
import watchFetchRandomWhoWinsTacticsSaga from "./tactics/FetchRandomWhoWinsTacticsSaga";

export default function* rootSaga() {
  yield all([watchFetchRandomWhoWinsTacticsSaga()]);
}
