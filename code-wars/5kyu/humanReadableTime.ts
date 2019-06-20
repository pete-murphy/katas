const divMod = (num: number, div: number) => [Math.floor(num / div), num % div];

const humanReadable = (str: string) => {
  const [h_, hRem] = divMod(+str, 60 * 60);
  const [m_, s_] = divMod(hRem, 60);
  const [h, m, s] = [h_, m_, s_].map(x => `${x}`.padStart(2, "0"));
  return `${h}:${m}:${s}`;
};

module.exports = humanReadable;
