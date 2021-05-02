import { put, takeLatest, call } from "redux-saga/effects";
import { WhoWinsModel } from "./WhoWinsModel";
import { IsItDrawModel } from "./IsItDrawModel";
import {
  getRandomIsItDrawTactics,
  getRandomWhoWinsTactics,
} from "./TacticsProxy";
import {
  FetchRandomIsItDrawTacticsAction,
  FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION,
  receiveIsItDrawTacticsAction,
} from "./IsItDrawTacticsActions";

function* fetchIsItDrawTacticsSaga(action: FetchRandomIsItDrawTacticsAction) {
  try {
    let isItDrawTactics: { [key: string]: IsItDrawModel } = {};

    const drawTactics: { [key: string]: { fen: string } } = yield call(
      getRandomIsItDrawTactics,
      action.nbrTactics / 2
    );
    Object.keys(drawTactics).forEach((key) => {
      isItDrawTactics[key] = { fen: drawTactics[key].fen, isItDraw: true };
    });

    const whoWinsTactics: { [key: string]: WhoWinsModel } = yield call(
      getRandomWhoWinsTactics,
      action.nbrTactics * 5
    );
    //Hack: filter tactics that are in mate position, should be fixed in the DB instead
    isItDrawTactics = {
      ...isItDrawTactics,
      ...Object.keys(whoWinsTactics).reduce((acc: any, key: string) => {
        if (
          whoWinsTactics[key].eval != "#0" &&
          Object.keys(acc).length < action.nbrTactics / 2 &&
          countNbrPieces(whoWinsTactics[key].fen) < 16
        ) {
          acc[key] = {
            fen: whoWinsTactics[key].fen,
            isItDraw: false,
            eval: whoWinsTactics[key].eval,
          };
        }
        return acc;
      }, {}),
    };
    yield put(receiveIsItDrawTacticsAction(isItDrawTactics));
  } catch (e) {
    console.log(e.message);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}

export function* watchFetchIsItDrawTacticsSaga() {
  yield takeLatest(
    FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION,
    fetchIsItDrawTacticsSaga
  );
}

function countNbrPieces(fen: any): number {
  let nbrEmptyCases = 0;
  [...fen.split(" ")[0]].forEach((c) => {
    if (c >= "0" && c <= "9") nbrEmptyCases += parseInt(c);
  });
  return 64 - nbrEmptyCases;
}
