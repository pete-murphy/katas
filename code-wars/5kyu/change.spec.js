const change = require("./change");
const test = require("tape");

test("change", t => {
  const s1 =
    "Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";
  const s11 =
    "Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release";
  const s12 =
    "Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";

  t.plan(3);
  t.equal(
    change(s1, "Ladder", "1.1"),
    "Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1"
  );
  t.equal(
    change(s11, "Balance", "1.5.6"),
    "Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0"
  );
  t.equal(change(s12, "Ladder", "1.1"), "ERROR: VERSION or PHONE");
});
