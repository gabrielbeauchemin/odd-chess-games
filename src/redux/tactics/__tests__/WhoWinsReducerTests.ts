import { WhoWinsReducer } from "../WhoWinsReducer";
import {
  popWhoWinsTacticsAction,
  receiveWhoWinsTacticsAction,
} from "../WhoWinsTacticsActions";

describe("WhoWinsReducer", () => {
  it("receives tactics without duplicat", () => {
    const state = WhoWinsReducer(
      { all: [{ eval: 1, fen: "a" }], current: null },
      receiveWhoWinsTacticsAction({
        flsdfjlf: { eval: 1, fen: "a" },
        dolfuodl: { eval: 1, fen: "b" },
      })
    );

    expect(state).toEqual({
      all: [
        { eval: 1, fen: "a" },
        { eval: 1, fen: "b" },
      ],
      current: null,
    });
  });

  it("pops tactic", () => {
    const state = WhoWinsReducer(
      { all: [{ eval: 1, fen: "a" }], current: null },
      popWhoWinsTacticsAction()
    );

    expect(state).toEqual({
      all: [],
      current: { eval: 1, fen: "a" },
    });
  });

  it("pops tactic when tactics is empty", () => {
    const state = WhoWinsReducer(
      { all: [], current: null },
      popWhoWinsTacticsAction()
    );

    expect(state).toEqual({
      all: [],
      current: null,
    });
  });
});
