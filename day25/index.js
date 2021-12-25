export default function canMouseEat(direction, game) {
  const x = game[0].length;
  const y = game.length;
  
  const flat = game.flat();
  const mouseLocation = flat.indexOf("m");
  const mouse = { 
    location: mouseLocation, 
    x: (mouseLocation%x), 
    y: Math.floor(mouseLocation/y) 
  };
  const moveByDirection = {
    up: mouse.y === 0 || y === 1 ? 0 : -y, 
    down: mouse.y === y-1 || y === 1 ? 0 : y,
    left: mouse.x === 0 || x === 1 ? 0 : -1, 
    right: mouse.x === x-1 || x === 1  ? 0: 1
  };
  const movement = moveByDirection[direction];
  
  return flat[mouse.location + movement] === '*';
}