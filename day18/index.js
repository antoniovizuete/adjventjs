//Day 18
export default function fixFiles(files) {
  const addPosition = (arrFile, pos) => [arrFile, pos];
  const byAsMeAndNotMe = (me, myPos) =>
    ([arrFile, pos]) => me === arrFile && myPos !== pos;
  const addOrdinal = ([, pos], ordinal) => [pos, ordinal + 1];
  const mutateName = (file, arr) =>
    ([pos, num]) => arr[pos] = `${file}(${num})`;

  files.forEach((file, i, arr) =>
    arr
      .map(addPosition)
      .filter(byAsMeAndNotMe(file, i))
      .map(addOrdinal)
      .forEach(mutateName(file, arr))
  );
  return files;
}
