import { WhoWinsModel } from "./WhoWinsModel";
import {
  PopWhoWinsTacticsAction,
  POP_WHO_WINS_TACTICS_ACTION,
  ReceiveWhoWinsTacticsAction,
  RECEIVE_WHO_WINS_TACTICS_ACTION,
} from "./WhoWinsTacticsActions";

type ReducerType = {
  all: WhoWinsModel[];
  current: WhoWinsModel | null;
};

type ReducerAction = ReceiveWhoWinsTacticsAction | PopWhoWinsTacticsAction;

const initial_state: ReducerType = {
  all: [],
  current: null,
};

export const WhoWinsReducer = (
  state: ReducerType = initial_state,
  action: ReducerAction
): ReducerType => {
  switch (action.type) {
    case RECEIVE_WHO_WINS_TACTICS_ACTION:
      return {
        ...state,
        all: [
          ...state.all,
          ...Object.values(action.tactics).filter((tactic) =>
            filterExistingTactics(tactic, state.all)
          ),
        ],
      };
    case POP_WHO_WINS_TACTICS_ACTION: {
        const current = state.all.pop();
        if(!current) return state;
        return {
            ...state,
            all: state.all,
            current
        }
    }
    default:
      return state;
  }
};

function filterExistingTactics(
  tactic: WhoWinsModel,
  existingTactics: WhoWinsModel[]
) {
  return !existingTactics.some(
    (existingTactic) => tactic.fen === existingTactic.fen
  );
}
