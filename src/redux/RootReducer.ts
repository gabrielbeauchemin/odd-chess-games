import { combineReducers } from "redux";
import { TacticsReducer } from "./tactics/TacticsReducer";

export const rootReducer = combineReducers({ tactics: TacticsReducer });
