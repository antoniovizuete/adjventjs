//Day 5
export default function daysToXmas(date) {
  date.setHours(0);
  const XTMAS = new Date("Dec 25, 2021");
  return Math.round((XTMAS - date) / 1000 / 60 / 60 / 24);
}
