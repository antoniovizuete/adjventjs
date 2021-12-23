//Day 17
export default function countPackages(carriers, carrierID) {
  const [, qty, team] = carriers.find(([id]) => id === carrierID);
  return qty +
    team.reduce(
      (a, teammateName) => a + countPackages(carriers, teammateName),
      0,
    );
}
