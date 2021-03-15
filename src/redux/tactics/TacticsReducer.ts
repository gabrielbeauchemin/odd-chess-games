import { combineReducers } from "redux";
import { WhoWinsReducer } from "./WhoWinsReducer";

export const TacticsReducer = combineReducers({
  whoWins: WhoWinsReducer,
});
