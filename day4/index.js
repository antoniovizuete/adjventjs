//Day 4
export default function createXmasTree(height) {
  const MAX_WIDTH = (height - 1) * 2 + 1;

  const addBranches = (i) => {
    const branchWidth = (i * 2) + 1;
    const noBranchWidth = (MAX_WIDTH - branchWidth) / 2;

    return [
      "_".repeat(noBranchWidth),
      "*".repeat(branchWidth),
      "_".repeat(noBranchWidth),
    ].join("");
  };

  const addTrunk = () => {
    const noTrunkWidth = (MAX_WIDTH - 1) / 2;
    return [
      "_".repeat(noTrunkWidth),
      "#",
      "_".repeat(noTrunkWidth),
    ].join("");
  };

  const arr = Array(height).fill("").map((v, i) => i)
    .map(addBranches);

  const trunk = addTrunk();
  arr.push(trunk);
  arr.push(trunk);

  return arr.join("\n");
}
