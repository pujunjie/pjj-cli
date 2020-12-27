/**
 * 执行终端命令相关代码
 */

const { exec } = require("child_process");

function commandExec(...args) {
  return new Promise((resolve, reject) => {
    exec(...args, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        console.log(stdout, "stdout");
        console.log(stderr, "stderr");
        resolve();
      }
    });
  });
}

module.exports = {
  commandExec,
};
