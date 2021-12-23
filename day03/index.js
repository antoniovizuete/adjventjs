//Day 3
export default function isValid(letter) {
  return letter.split(" ")
    .map((l) => ({
      exact:
        /^(?:(?:[a-zA-Z\u00C0-\u00FF])[a-zA-Z\u00C0-\u00FF]*(?:[a-zA-Z\u00C0-\u00FF])?)$/
          .test(l),
      withParenthesis: /^(?:(?:\()[a-zA-Z\u00C0-\u00FF]+(?:\)))$/.test(l),
    }))
    .reduce((a, c) => a && (c.exact || c.withParenthesis), true);
}
