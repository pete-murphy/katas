module.exports = function(wallaby) {
  return {
    files: ["*/**/*.js", "!*/**/*.spec.js", "!node_modules"],

    tests: ["*/**/*.spec.js", "!node_modules"],

    testFramework: "tape",

    env: {
      type: "node",
      runner: "node"
    }
  };
};
