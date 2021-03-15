import { WhoWinsModel } from "./WhoWinsModel";

export const FETCH_RANDOM_WHO_WINS_TACTICS_ACTION =
  "FETCH_RANDOM_WHO_WINS_TACTICS_ACTION";
export type FetchRandomWhoWinsTacticsAction = {
  type: typeof FETCH_RANDOM_WHO_WINS_TACTICS_ACTION;
  nbrTactics: number;
};
export function fetchRandomWhoWinsTacticsAction(
  nbrTactics: number
): FetchRandomWhoWinsTacticsAction {
  return {
    type: FETCH_RANDOM_WHO_WINS_TACTICS_ACTION,
    nbrTactics,
  };
}

export const RECEIVE_WHO_WINS_TACTICS_ACTION =
  "RECEIVE_WHO_WINS_TACTICS_ACTION";
export type ReceiveWhoWinsTacticsAction = {
  type: typeof RECEIVE_WHO_WINS_TACTICS_ACTION;
  tactics: WhoWinsModel[];
};
export function receiveWhoWinsTacticsAction(
  tactics: WhoWinsModel[]
): ReceiveWhoWinsTacticsAction {
  return {
    type: RECEIVE_WHO_WINS_TACTICS_ACTION,
    tactics,
  };
}
