const fs = require("fs");
const path = require("path");

function myMkdir(filepath) {
  if (fs.existsSync(filepath)) {
    // 判断目录是否存在
    return true;
  } else {
    // 拿到父目录
    const parentFilePath = path.dirname(filepath);
    if (myMkdir(parentFilePath)) {
      // 如果父目录存在，创建子目录
      fs.mkdirSync(filepath);
      return true;
    }
  }
}

module.exports = {
  myMkdir,
};
