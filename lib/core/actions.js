const { promisify } = require("util");
const path = require("path");
const fs = require("fs");

const download = promisify(require("download-git-repo"));
const open = require("open");
const ejs = require("ejs");

const { repo } = require("../config/repo-config");
const { commandExec } = require("../utils/teminals");
const { logInfo, errInfo } = require("../utils/log");
const { myMkdir } = require("../utils/file");
const { updateProjectName } = require("../utils/updateFile");

/**
 *
 * @param {*} filename 文件名
 * @param {*} defaultPath 默认生成文件的路径
 * @param {*} filepath 指定生成文件的路径
 */
async function handleEjsToFile(filename, defaultPath, filepath) {
  // 1.获取模板文件的路径
  const templatePath = path.resolve(
    __dirname,
    "../template/react-component.ejs"
  );

  // 2.将文件名和路径名拼接
  let newFilepath = filepath || defaultPath;
  newFilepath = path.join(newFilepath, filename);

  // 3.创建路径
  myMkdir(newFilepath);
  try {
    // 4.拿到模板文件内容
    const fileContent = await ejs.renderFile(templatePath, {
      name: filename,
    });

    // 5.将模板内容写入指定文件
    fs.writeFileSync(path.resolve(newFilepath, `${filename}.tsx`), fileContent);
    console.log(`${filename} component added successfully`);
  } catch (err) {
    errInfo(err);
  }
}

async function createProject(project, router, otherArgs) {
  // 1.提示信息
  logInfo("pjj helps you create your project, please wait a moment~");
  try {
    // 2.判断用户操作系统是否为windows
    const commond = process.platform === "win32" ? "npm.cmd" : "npm";

    // 3.clone项目
    await download(`direct:${repo}`, project, {
      clone: true,
    });

    // 4.修改App.tsx
    if (router === "HashRouter") {
      updateApp(project, router);
    }

    // 5.修改package.json和packag-lock.json
    updateProjectName(`./${project}/package.json`, project);
    updateProjectName(`./${project}/package-lock.json`, project);

    // 6.执行npm install
    await commandExec(`${commond} install`, { cwd: `./${project}` });

    // 7.打开浏览器
    // open("http://localhost:3000");

    // 8.运行项目
    // await commandExec(`${commond} start`, { cwd: `./${project}` });
  } catch (err) {
    errInfo(err);
  }
}

async function updateApp(project, router) {
  let templatePath = path.resolve(__dirname, "../template/app.ejs");
  try {
    // 1.拿到模板文件内容
    const fileContent = await ejs.renderFile(templatePath, {
      router,
    });

    // 2.将模板内容写入指定文件
    fs.writeFileSync(`./${project}/src/App.tsx`, fileContent);
  } catch (err) {
    errInfo(err);
  }
}

function addComponent(filename, filepath) {
  handleEjsToFile(filename, "src/components/web/components", filepath);
}

function addPage(filename, filepath) {
  handleEjsToFile(filename, "src/components/web/pages", filepath);
}

module.exports = {
  createProject,
  addComponent,
  addPage,
};
