//Day 1
export default function contarOvejas(ovejas) {
  return ovejas.filter(({ color, name }) =>
    color === "rojo" &&
    name.match(/[n]/i) &&
    name.match(/[a]/i)
  );
}
