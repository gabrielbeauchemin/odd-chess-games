import { Button } from "antd";
import React from "react";
import { ChessBoard } from "./ChessBoard";

export function WhoWinsGame() {
  return (
    <>
      <h3>Who wins? Find which side is winning!</h3>
      <div>
        <ChessBoard
          fen={
            "r1b1kbnr/pppq1pp1/2n1p2p/1B6/5B2/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 7"
          }
          viewOnly={true}
        />
      </div>
      <br />
      <div>
        <div>White to play. Who should win?</div>
          <div className="flex" style={{justifyContent:"space-evenly"}}>
          <Button size="large" style={{ backgroundColor: "white" }}>
            White
          </Button>
          <Button size="large" style={{ backgroundColor: "black" }}>
            Black
          </Button>
        </div>
        <div className="flex"></div>
      </div>
    </>
  );
}
