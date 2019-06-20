const isValidPhone = (str: string) => /\+1-\d{3}-\d{3}-\d{4}/.test(str);
const isValidVersion = (str: string) => /^\d+\.\d+$/.test(str);

const onValidPhone = (_str: string) => "+1-503-555-0090";
const onValidVersion = (v: string) => (str: string) => (str !== "2.0" ? v : str);

const lines = (str: string) => str.split("\n");
const parsePhoneAndVersion = (str: string) => {
  const phone = lines(str)[3].split(": ")[1];
  const version = lines(str)[5].split(": ")[1];
  return [phone, version];
};

function change(s: string, prog: string, version: string) {
  const [p, v] = parsePhoneAndVersion(s);
  return isValidPhone(p) && isValidVersion(v)
    ? `Program: ${prog} Author: g964 Phone: ${onValidPhone(
      p
    )} Date: 2019-01-01 Version: ${onValidVersion(version)(v)}`
    : "ERROR: VERSION or PHONE";
}

module.exports = change;
