import { put, takeLatest, call } from "redux-saga/effects";
import { WhoWinsModel } from "./WhoWinsModel";
import { getRandomWhoWinsTactics } from "./TacticsProxy";
import {
  FetchRandomWhoWinsTacticsAction,
  FETCH_RANDOM_WHO_WINS_TACTICS_ACTION,
  receiveWhoWinsTacticsAction,
} from "./WhoWinsTacticsActions";

function* fetchRandomWhoWinsTacticsSaga(action: FetchRandomWhoWinsTacticsAction) {
  try {
    const tactics: { [key: string]: WhoWinsModel } = yield call(
      getRandomWhoWinsTactics,
      action.nbrTactics
    );
    yield put(receiveWhoWinsTacticsAction(tactics));
  } catch (e) {
      debugger;
    console.log(e.message);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}

function* watchFetchRandomWhoWinsTacticsSaga() {
  yield takeLatest(
    FETCH_RANDOM_WHO_WINS_TACTICS_ACTION,
    fetchRandomWhoWinsTacticsSaga
  );
}

export default watchFetchRandomWhoWinsTacticsSaga;
