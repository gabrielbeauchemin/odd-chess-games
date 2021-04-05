import { useEffect, useState } from "react";

export type MinutesConterProps = {
  seconds: number;
  counterId?: string; //start the counter only on new id
  onFinish?: () => void; //function called when the counter reaches 0 seconds
};

export function MinutesCounter(props: MinutesConterProps) {
  const [beginDate, setBeginDate] = useState<number | undefined>();
  const [secondsLeft, setSecondsLeft] = useState(props.seconds);
  useEffect(() => {
    if (props.counterId == undefined) {
      return;
    }
    var timerId = setInterval(() => {
      if (secondsLeft > 0 && beginDate != undefined) {
        const timePassed = Date.now() - beginDate;
        const secondsPassed = Math.floor(timePassed / 1000);
        setSecondsLeft(props.seconds - secondsPassed);
      } else if (props.onFinish != undefined && secondsLeft == 0) {
        setSecondsLeft(-1);
        props.onFinish();
        clearInterval(timerId);
      }
    }, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [props.counterId, props.onFinish, secondsLeft, beginDate]);

  useEffect(() => {
    setBeginDate(Date.now());
  }, [props.counterId]);
  return <div>{secondsToMinutesDisplay(secondsLeft)}</div>;
}

function secondsToMinutesDisplay(seconds: number) {
  if (seconds < 0) return "0:00";
  const minutesDisplay = Math.floor(seconds / 60);
  const secondsDisplay = seconds - minutesDisplay * 60;
  const secondsDisplayPadding = secondsDisplay < 10 ? "0" : "";
  return `${minutesDisplay}:${secondsDisplayPadding}${secondsDisplay}`;
}
