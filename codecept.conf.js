exports.config = {
  name: "codeceptjs-yarn-js",
  tests: "./specs/*.spec.js",
  output: "./output",
  plugins: {
    allure: {
      resultsDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
