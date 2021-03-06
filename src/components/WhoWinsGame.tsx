import { Button, Modal } from "antd";
import React, { useState } from "react";
import { WhoWinsModel } from "../redux/tactics/WhoWinsModel";
import {getSideToPlayFromFen} from "../util/ChessFunctions";
import {toTitleCase} from "../util/StringFunctions";
import { uuidv4 } from "../util/Uuid";
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
  const onUserGuessFailure = (message: string) => {
    if (score > bestScore) setBestScore(score);
    setScore(0);
    setGameStarted(false);
    setCounterId(undefined);
    Modal.error({
      title: message,
    });
  };
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
                setCounterId(undefined);
                if (score > bestScore) setBestScore(score);
                setScore(0);
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
          orientation={getSideToPlayFromFen(props.currentTactic?.fen)}
        />
      </div>
      <br />
      <div>
        {gameStarted && props.currentTactic ? (
          <div>
            <div>
              {toTitleCase(getSideToPlayFromFen(props.currentTactic.fen))} to
              play. Who should win?
            </div>
            <div className="flex" style={{ justifyContent: "space-evenly" }}>
              <Button
                size="large"
                style={{ backgroundColor: "white" }}
                onClick={() =>
                  props.receiveUserGuess(
                    true,
                    () => setScore(score + 1),
                    onUserGuessFailure
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
                    onUserGuessFailure
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
