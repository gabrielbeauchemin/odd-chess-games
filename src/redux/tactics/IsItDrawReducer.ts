import { IsItDrawModel } from "./IsItDrawModel";
import {
  PopIsItDrawTacticsAction,
  POP_IS_IT_DRAW_TACTICS_ACTION,
  ReceiveIsItDrawTacticsAction,
  RECEIVE_IS_IT_DRAW_TACTICS_ACTION,
} from "./IsItDrawTacticsActions";

type ReducerType = {
  all: IsItDrawModel[];
  current: IsItDrawModel | null;
};

type ReducerAction = ReceiveIsItDrawTacticsAction | PopIsItDrawTacticsAction;

const initial_state: ReducerType = {
  all: [],
  current: null,
};

export const IsItDrawReducer = (
  state: ReducerType = initial_state,
  action: ReducerAction
): ReducerType => {
  switch (action.type) {
    case RECEIVE_IS_IT_DRAW_TACTICS_ACTION:
      return {
        ...state,
        all: [
          ...state.all,
          ...Object.values(action.tactics).filter((tactic) =>
            filterExistingTactics(tactic, state.all)
          ),
        ],
      };
    case POP_IS_IT_DRAW_TACTICS_ACTION: {
      const current = popRandom(state.all);
      if (!current) return state;
      return {
        ...state,
        all: state.all,
        current,
      };
    }
    default:
      return state;
  }
};

function popRandom<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  const elem = array[randomIndex];
  removeAtIndex(array, randomIndex);
  return elem;
}

function removeAtIndex<T>(array: T[], index: number): T[] {
  return array.splice(index, 1);
}

function filterExistingTactics(
  tactic: IsItDrawModel,
  existingTactics: IsItDrawModel[]
) {
  return !existingTactics.some(
    (existingTactic) => tactic.fen === existingTactic.fen
  );
}
