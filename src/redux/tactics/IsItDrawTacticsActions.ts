import {IsItDrawModel} from "./IsItDrawModel";

export const FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION =
  "FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION";
export type FetchRandomIsItDrawTacticsAction = {
  type: typeof FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION;
  nbrTactics: number;
};
export function fetchRandomIsItDrawTacticsAction(
  nbrTactics: number
): FetchRandomIsItDrawTacticsAction {
  return {
    type: FETCH_RANDOM_IS_IT_DRAW_TACTICS_ACTION,
    nbrTactics,
  };
}

export const RECEIVE_IS_IT_DRAW_TACTICS_ACTION =
  "RECEIVE_IS_IT_DRAW_TACTICS_ACTION";
export type ReceiveIsItDrawTacticsAction = {
  type: typeof RECEIVE_IS_IT_DRAW_TACTICS_ACTION;
  tactics: { [key: string]: IsItDrawModel };
};
export function receiveIsItDrawTacticsAction(tactics: {
  [key: string]: IsItDrawModel;
}): ReceiveIsItDrawTacticsAction {
  return {
    type: RECEIVE_IS_IT_DRAW_TACTICS_ACTION,
    tactics,
  };
}

export const POP_IS_IT_DRAW_TACTICS_ACTION = "POP_IS_IT_DRAW_TACTICS_ACTION";
export type PopIsItDrawTacticsAction = {
  type: typeof POP_IS_IT_DRAW_TACTICS_ACTION;
};
export function popIsItDrawTacticsAction(): PopIsItDrawTacticsAction {
  return { type: POP_IS_IT_DRAW_TACTICS_ACTION };
}

export const RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION =
  "RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION";
export type ReceiveUserGuessIsItDrawAction = {
  isItDrawUserGuess: boolean;
  incrementScore: () => void;
  onUserGuessFailure: (message: string) => void;
  type: typeof RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION;
};
export function receiveUserGuessIsItDrawAction(
  IsItDraw: boolean,
  incrementScore: () => void,
  onUserGuessFailure: (message: string) => void
): ReceiveUserGuessIsItDrawAction {
  return {
    isItDrawUserGuess: IsItDraw,
    incrementScore,
    onUserGuessFailure,
    type: RECEIVE_USER_GUESS_IS_IT_DRAW_ACTION,
  };
}
