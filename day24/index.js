export default function checkIsSameTree(treeA, treeB) {
  let theSame = true;
  const checkNullBranches = (nodeA, nodeB) => 
    (nodeA.left && !nodeB.left) || 
    (!nodeA.left && nodeB.left) ||
    (nodeA.right && !nodeB.right) || 
    (!nodeA.right && nodeB.right);
  
  function traverse(nodeA, nodeB) {
    if (!theSame) return;
    if (checkNullBranches(nodeA, nodeB)) {
      theSame = false;
      return;
    };
    nodeA.left && nodeB.left && traverse(nodeA.left, nodeB.left);
    nodeA.right && nodeB.right && traverse(nodeA.right, nodeB.right);
    if (nodeA.value !== nodeB.value) {
      theSame = false;
    }
  }
  traverse(treeA, treeB);

  return theSame;
}