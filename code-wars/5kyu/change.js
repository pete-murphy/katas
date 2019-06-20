const isValidPhone = str => /\+1-\d{3}-\d{3}-\d{4}/.test(str);
const isValidVersion = str => /^\d+\.\d+$/.test(str);

const onValidPhone = _str => "+1-503-555-0090";
const onValidVersion = v => str => (str !== "2.0" ? v : str);

const lines = str => str.split("\n");
const parsePhoneAndVersion = str => {
  const phone = lines(str)[3].split(": ")[1];
  const version = lines(str)[5].split(": ")[1];
  return [phone, version];
};

function change(s, prog, version) {
  const [p, v] = parsePhoneAndVersion(s);
  return isValidPhone(p) && isValidVersion(v)
    ? `Program: ${prog} Author: g964 Phone: ${onValidPhone(
        p
      )} Date: 2019-01-01 Version: ${onValidVersion(version)(v)}`
    : "ERROR: VERSION or PHONE";
}

module.exports = change;
