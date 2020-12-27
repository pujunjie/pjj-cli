const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const open = require("open");

const { repo } = require("../config/repo-config");
const { commandExec } = require("../utils/teminals");
const { logInfo, errInfo } = require("../utils/log");

async function createProject(project, otherArgs) {
  // 1.提示信息
  logInfo("pjj helps you create your project, please wait a moment~");
  try {
    // 2.判断用户操作系统是否为windows
    const commond = process.platform === "win32" ? "npm.cmd" : "npm";

    // 3.clone项目
    await download(`direct:${repo}`, project, {
      clone: true,
    });

    // 4.执行npm install
    await commandExec(`${commond} install`, { cwd: `./${project}` });

    // 5.打开浏览器
    // open("http://localhost:3000");

    // 6.运行项目
    // await commandExec(`${commond} start`, { cwd: `./${project}` });
  } catch (err) {
    errInfo(err);
  }
}

module.exports = {
  createProject,
};
