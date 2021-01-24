declare module "react-chessground" {
  import React from "react";
  interface ReactChessGroundProps {
    onMove?: (from: string, to: string) => void;
    randomMove?: (moves: string[], move: string) => void;
    promotion?: (e: string) => void;
    reset?: () => void;
    undo?: () => void;
  }

  declare class Chessground extends React.Component<
    ReactChessGroundProps,
    any
  > {}
  export default Chessground;
}
