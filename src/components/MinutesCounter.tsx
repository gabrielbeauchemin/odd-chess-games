export type MinutesConterProps = {
  seconds: number;
};

export function MinutesCounter(props: MinutesConterProps) {
  return <div>{secondsToMinutesDisplay(props.seconds)}</div>;
}

function secondsToMinutesDisplay(seconds: number) {
  const secondsDisplay = seconds % 60;
  const minutesDisplay = seconds / 60;
  const secondsDisplayPadding = secondsDisplay < 10 ? "0" : "";
  return `${minutesDisplay}:${secondsDisplay}${secondsDisplayPadding}`;
}
