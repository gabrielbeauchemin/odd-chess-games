import { IsItDrawReducer } from "../IsItDrawReducer";
import {
  popIsItDrawTacticsAction,
  receiveIsItDrawTacticsAction,
} from "../IsItDrawTacticsActions";

describe("IsItDrawReducer", () => {
  it("receives tactics without duplicat", () => {
    const state = IsItDrawReducer(
      { all: [{ fen: "a", isItDraw: true }], current: null },
      receiveIsItDrawTacticsAction({
        flsdfjlf: { fen: "a", isItDraw: true },
        dolfuodl: { fen: "b", isItDraw: false },
      })
    );

    expect(state).toEqual({
      all: [
        { fen: "a", isItDraw: true },
        { fen: "b", isItDraw: false },
      ],
      current: null,
    });
  });

  it("pops tactic", () => {
    const state = IsItDrawReducer(
      { all: [{ fen: "a", isItDraw: true }], current: null },
      popIsItDrawTacticsAction()
    );

    expect(state).toEqual({
      all: [],
      current: { fen: "a", isItDraw: true },
    });
  });

  it("pops tactic when tactics is empty", () => {
    const state = IsItDrawReducer(
      { all: [], current: null },
      popIsItDrawTacticsAction()
    );

    expect(state).toEqual({
      all: [],
      current: null,
    });
  });
});
