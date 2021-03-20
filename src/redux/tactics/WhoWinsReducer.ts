import { WhoWinsModel } from "./WhoWinsModel";
import {
  ReceiveWhoWinsTacticsAction,
  RECEIVE_WHO_WINS_TACTICS_ACTION,
} from "./WhoWinsTacticsActions";

const initial_state: WhoWinsModel[] = [];

export const WhoWinsReducer = (
  state: WhoWinsModel[] = initial_state,
  action: ReceiveWhoWinsTacticsAction
): WhoWinsModel[] => {
  switch (action.type) {
    case RECEIVE_WHO_WINS_TACTICS_ACTION:
      return [
        ...state,
        ...Object.values(action.tactics).filter(
          (tactic) =>
            !state.some((existingTactic) => tactic.fen === existingTactic.fen)
        ),
      ];
    default:
      return state;
  }
};
