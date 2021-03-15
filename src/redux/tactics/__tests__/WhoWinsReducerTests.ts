import { WhoWinsReducer } from "../WhoWinsReducer";
import { receiveWhoWinsTacticsAction } from "../WhoWinsTacticsActions";

describe("WhoWinsReducer", () => {
  it("receives tactics without duplicat", () => {
    const state = WhoWinsReducer(
      [{ eval: 1, fen: "a" }],
      receiveWhoWinsTacticsAction([
        { eval: 1, fen: "a" },
        { eval: 1, fen: "b" },
      ])
    );

    expect(state).toEqual([
      { eval: 1, fen: "a" },
      { eval: 1, fen: "b" },
    ]);
  });
});
