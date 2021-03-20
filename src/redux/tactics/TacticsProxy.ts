export async function getRandomWhoWinsTactics(nbrTactics: number) {
  const url = `https://chess-db-d4956-default-rtdb.firebaseio.com/who-won-tactics/tactics.json?orderBy="random"&limitToFirst=${nbrTactics}&startAt=${Math.random()}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e) {
    return console.log(e);
  }
}
