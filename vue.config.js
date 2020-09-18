const fs = require("fs");
const { resolve, join } = require("path");
const packagDir = resolve(__dirname, "packages");
const packagNames = fs.readdirSync(packagDir);
const configList = packagNames.map(item => {
  const dir = resolve(__dirname, "packages", item);
  const config = require(resolve(dir, "config.js"));
  return Object.assign({}, config, {
    entry: join(dir, config.entry)
  });
});
console.log(configList);
process.env.VUE_APP_DEMOS = JSON.stringify(configList);
module.exports = {};
