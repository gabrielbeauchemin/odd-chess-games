import { put, takeLatest, call } from "redux-saga/effects";
import { WhoWinsModel } from "./WhoWinsModel";
import {
  FetchRandomWhoWinsTacticsAction,
  receiveWhoWinsTacticsAction,
} from "./WhoWinsTacticsActions";
import { getRandomWhoWinsTactics } from "./TacticsProxy";

function* fetchRandomWhoWinsTactics(action: FetchRandomWhoWinsTacticsAction) {
  try {
    const tactics: WhoWinsModel[] = yield call(
      getRandomWhoWinsTactics,
      action.nbrTactics
    );
    yield put(receiveWhoWinsTacticsAction(tactics));
  } catch (e) {
    console.log(e.message);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}

function* fetchRandomWhoWinsTacticsSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchRandomWhoWinsTactics);
}

export default fetchRandomWhoWinsTacticsSaga;
