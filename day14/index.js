//Day 14
export default function missingReindeer(ids) {
  ids.sort((a, b) => a - b);
  for (let i = 0; i < ids.length; i++) {
    if (i === 0 && ids[i] !== 0) return 0;
    if (i + 1 >= ids.length) return ids.length;
    if (ids[i + 1] > ids[i] + 1) return ids[i] + 1;
  }
}
