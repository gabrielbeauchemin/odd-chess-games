import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { MinutesCounter } from "./MinutesCounter";

export function WhoWinsGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [counterId, setCounterId] = useState<string | undefined>(undefined);
  const [score] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <h3>Who wins?</h3>
      <div>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <div>
            <MinutesCounter
              seconds={180}
              counterId={counterId}
              onFinish={() => {
                setGameStarted(false);
                if (score > bestScore) setBestScore(score);
                Modal.info({
                  title: `Finished! Your score is ${score}.`,
                  content: null,
                  onOk() {},
                });
              }}
            />
          </div>
            <div className="flex">
          <div>Score: {score}</div>
          <div>&nbsp; Record: {bestScore}</div>
            </div>

        </div>
        <ChessBoard
          fen={
            "r1b1kbnr/pppq1pp1/2n1p2p/1B6/5B2/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 7"
          }
          viewOnly={true}
        />
      </div>
      <br />
      <div>
        {gameStarted ? (
          <div>
            <div>White to play. Who should win?</div>
            <div className="flex" style={{ justifyContent: "space-evenly" }}>
              <Button size="large" style={{ backgroundColor: "white" }}>
                White
              </Button>
              <Button size="large" style={{ backgroundColor: "black" }}>
                Black
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              Find which side is winning as many times as possible in three
              minutes.
            </div>
            <div>Don't be mistaken or it is game over.</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="large"
                onClick={() => {
                  setGameStarted(true);
                  setCounterId(uuidv4());
                }}
              >
                Start
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
