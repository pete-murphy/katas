const humanReadable = require("./humanReadableTime");
const test = require("tape");

test("humanReadableTime", t => {
  t.equal(humanReadable(0), "00:00:00", "humanReadable(0)");
  t.equal(humanReadable(5), "00:00:05", "humanReadable(5)");
  t.equal(humanReadable(60), "00:01:00", "humanReadable(60)");
  t.equal(humanReadable(86399), "23:59:59", "humanReadable(86399)");
  t.equal(humanReadable(359999), "99:59:59", "humanReadable(359999)");
});
