module.exports = function(wallaby) {
  return {
    files: ["*/*.js", "!*/*.spec.js"],

    tests: ["*/*.spec.js"],

    testFramework: "tape",

    env: {
      type: "node",
      runner: "node"
    }
  };
};
