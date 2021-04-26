import { combineReducers } from "redux";
import { IsItDrawReducer } from "./IsItDrawReducer";
import { WhoWinsReducer } from "./WhoWinsReducer";

export const TacticsReducer = combineReducers({
  whoWins: WhoWinsReducer,
  isItDraw: IsItDrawReducer,
});
