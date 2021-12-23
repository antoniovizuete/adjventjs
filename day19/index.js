//Day 19
export default function learn(time, courses) {
  const addIndex = (c2, i2) => [c2, i2];
  const byNotMe = (i1) => ([, i2]) => i1 !== i2;
  const toPayload = (c1, i1) =>
    ([c2, i2]) => [i1 > i2 ? i2 : i1, i2 < i1 ? i1 : i2, c1 + c2];
  const theSameItems = (item1, i, arr) =>
    arr.findIndex((item2) => item1[0] === item2[0] && item1[1] === item2[1]) ===
      i;
  const calcDiff = ([x, y, value]) => [x, y, value - time];
  const exceedingTime = ([, , diff]) => diff <= 0;
  const toTheClosest = (a, c) => a[2] < c[2] ? c : a;

  const cartesian = (sourceArray) =>
    sourceArray.flatMap((c1, i1, arr) =>
      arr
        .map(addIndex)
        .filter(byNotMe(i1))
        .map(toPayload(c1, i1))
    );

  const [x, y] = cartesian(courses)
    .filter(theSameItems)
    .map(calcDiff)
    .filter(exceedingTime)
    .reduce(toTheClosest, [, , -Infinity]);

  if (x === undefined && y === undefined) {
    return null;
  }

  return [x, y];
}
