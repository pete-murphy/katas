const toCharCode = c => c.toUpperCase().charCodeAt() - 64;

const isChar = x => /[a-z]/i.test(x);

function alphabetPosition(text) {
  return Array.from(text)
    .reduce((acc, x) => (isChar(x) ? acc.concat(toCharCode(x)) : acc), [])
    .join(" ");
}

module.exports = alphabetPosition;
