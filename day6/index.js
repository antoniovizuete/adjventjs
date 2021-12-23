//Day 6
export default function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    if ((i + 1) === numbers.length) return null;
    const current = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const next = numbers[j];
      if (current + next === result) {
        return [current, next];
      }
    }
  }
  return null;
}
