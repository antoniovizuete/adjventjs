//Day 22
export default function countDecorations(bigTree) {
  let sum = 0;
  function traverse(node) {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    sum += node.value;
  }
  traverse(bigTree);

  return sum;
}

function guarriCountDecorations(bigTree) {
  return JSON.stringify(bigTree).match(/(\d+)/g)
    .map((n) => Number(n))
    .reduce((a, c) => a + c);
}
