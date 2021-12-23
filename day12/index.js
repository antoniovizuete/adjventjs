//Day 12
export default function getMinJump(obstacles) {
  const TRAP = "X";
  const path = Array(Math.max(11, Math.max(...obstacles) + 1))
    .fill("")
    .map((_, i) => obstacles.includes(i) ? TRAP : "_");

  for (let i = 1; i <= path.length; i++) {
    for (let j = i; j < path.length; j += i) {
      if (path[j] === TRAP) {
        break;
      }

      if (j + i > path.length) {
        return i;
      }
    }
  }
}
