import React from "react";
import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";

type ChessBoardProps = {};

export function ChessBoard(props: ChessBoardProps) {
  return (
    <Chessground fen="r1b1kbnr/pppq1pp1/2n1p2p/1B6/5B2/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 7" />
  );
}
