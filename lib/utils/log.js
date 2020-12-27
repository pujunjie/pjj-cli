const chalk = require("chalk");

function logInfo(info) {
  console.log(chalk.blue(info));
}

function errInfo(err) {
  console.log(chalk.red(err));
}

module.exports = {
  logInfo,
  errInfo,
};
