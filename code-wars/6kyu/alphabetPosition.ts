const toCharCode = (c: string) => String(c.toUpperCase().charCodeAt(0) - 64);

const isChar = (x: string) => /[a-z]/i.test(x);

const alphabetPosition = (text: string): string => {
  return Array.from(text)
    .reduce((acc: Array<string>, x: string) => (isChar(x) ? [...acc, toCharCode(x)] : acc), [])
    .join(" ");
}

module.exports = alphabetPosition;
