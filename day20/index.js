//Day 20
export default function pangram(letter) {
  const CHARS = "abcdefghijklmnñopqrstuvwxyz".split("").reduce(
    (a, c) => ({ ...a, [c]: false }),
    {},
  );

  letter
    .split("ñ")
    .join("#ñ#")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split("#n#")
    .join("ñ")
    .split("")
    .map((c) => c.trim())
    .filter(Boolean)
    .forEach((c) => {
      if (CHARS.hasOwnProperty(c)) CHARS[c] = true;
    });
  return Object.values(CHARS).every(Boolean);
}
