#!/usr/bin/env node
const { program } = require("commander");
const craeteHelpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// 查看版本
program.version(require("./package.json").version);
console.log(1)

// 帮助和可选信息
craeteHelpOptions();

// 创建其他指令
createCommands();

// 解析终端指令
program.parse(process.argv);
