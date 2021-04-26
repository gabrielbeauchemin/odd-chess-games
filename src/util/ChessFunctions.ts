export function getSideToPlayFromFen(fen: string | undefined) {
  if (fen === undefined || fen.split(" ")[1] == "w") {
    return "white";
  }
  return "black";
}
