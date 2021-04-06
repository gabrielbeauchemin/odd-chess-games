import { Button, Modal } from "antd";
import React, { useState } from "react";
import { WhoWinsModel } from "../redux/tactics/WhoWinsModel";
import { ChessBoard } from "./ChessBoard";
import { MinutesCounter } from "./MinutesCounter";

type WhoWinsGameProps = {
  currentTactic: WhoWinsModel | null;
  popWhoWinsTactics: () => void;
  receiveUserGuess: (
    isWhiteWinning: boolean,
    incrementScore: () => void,
    onUserGuessFailure: (message: string) => void
  ) => void;
};

export function WhoWinsGame(props: WhoWinsGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [counterId, setCounterId] = useState<string | undefined>(undefined);
  const [score, setScore] = useState(0);
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
            props.currentTactic !== null
              ? props.currentTactic.fen
              : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
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
              <Button
                size="large"
                style={{ backgroundColor: "white" }}
                onClick={() =>
                  props.receiveUserGuess(
                    true,
                    () => setScore(score + 1),
                    (message) =>
                      Modal.error({
                        title: message,
                      })
                  )
                }
              >
                White
              </Button>
              <Button
                size="large"
                style={{ backgroundColor: "black" }}
                onClick={() =>
                  props.receiveUserGuess(
                    false,
                    () => setScore(score + 1),
                    (message) =>
                      Modal.error({
                        title: message,
                      })
                  )
                }
              >
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
                  props.popWhoWinsTactics();
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
