import { put, takeEvery, select } from "redux-saga/effects";
import { message } from "antd";
import { IsItDrawModel } from "./IsItDrawModel";
import {
  fetchRandomIsItDrawTacticsAction,
  popIsItDrawTacticsAction,
  ReceiveUserGuessIsItDrawAction,
  RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION,
} from "./IsItDrawTacticsActions";

function* receiveUserGuessIsItDrawSaga(action: ReceiveUserGuessIsItDrawAction) {
  const tactics: IsItDrawModel[] = yield select(
    (state) => state.tactics.isItDraw.all
  );
  const currentTactic: IsItDrawModel = yield select(
    (state) => state.tactics.isItDraw.current
  );
  if (tactics.length < 10) {
    yield put(fetchRandomIsItDrawTacticsAction(20));
  }
  if (action.isItDrawUserGuess === currentTactic.isItDraw) {
    action.incrementScore();
    message.success(`Correct!`);
    yield put(popIsItDrawTacticsAction());
  } else {
    action.onUserGuessFailure(`Game over!`);
  }
}

export function* watchReceiveUserGuessIsItDrawSaga() {
  yield takeEvery(
    RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION,
    receiveUserGuessIsItDrawSaga
  );
}
