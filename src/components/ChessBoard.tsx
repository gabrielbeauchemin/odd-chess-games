import Chessground from "react-chessground";
import "react-chessground/dist/styles/chessground.css";

type ChessBoardProps = {
  fen: string;
  viewOnly?: boolean;
  orientation?: 'white' | 'black';
};

export function ChessBoard(props: ChessBoardProps) {
    return <Chessground fen={props.fen} viewOnly={props.viewOnly} orientation={props.orientation} width="400px" height="400px"/>;
}
