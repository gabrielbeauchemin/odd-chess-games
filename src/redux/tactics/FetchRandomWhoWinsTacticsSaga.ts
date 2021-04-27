import { put, takeLatest, call } from "redux-saga/effects";
import { WhoWinsModel } from "./WhoWinsModel";
import { getRandomWhoWinsTactics } from "./TacticsProxy";
import {
  FetchRandomWhoWinsTacticsAction,
  FETCH_RANDOM_WHO_WINS_TACTICS_ACTION,
  receiveWhoWinsTacticsAction,
} from "./WhoWinsTacticsActions";

function* fetchRandomWhoWinsTacticsSaga(
  action: FetchRandomWhoWinsTacticsAction
) {
  try {
    let tactics: { [key: string]: WhoWinsModel } = yield call(
      getRandomWhoWinsTactics,
      action.nbrTactics
    );
    //Hack: filter tactics that are in mate position, should be fixed in the DB instead
    tactics = Object.keys(tactics).reduce((filtered: any, key: string) => {
      if (tactics[key].eval != "#0") filtered[key] = tactics[key];
      return filtered;
    }, {});
    yield put(receiveWhoWinsTacticsAction(tactics));
  } catch (e) {
    console.log(e.message);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}

export default function* watchFetchRandomWhoWinsTacticsSaga() {
  yield takeLatest(
    FETCH_RANDOM_WHO_WINS_TACTICS_ACTION,
    fetchRandomWhoWinsTacticsSaga
  );
}
