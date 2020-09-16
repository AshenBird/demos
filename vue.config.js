const fs = require("fs");
const { resolve } = require("path");
const configList = fs
  .readdirSync(resolve(__dirname, "packages"))
  .map(item => require(resolve("./packages", item, "config.js")));
process.env.VUE_APP_DEMOS = JSON.stringify(configList);
module.exports = {};
