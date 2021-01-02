const fs = require("fs");

function updateProjectName(path, projectName) {
  let res = JSON.parse(fs.readFileSync(path));
  res.name = projectName;
  res = JSON.stringify(res, null, "\t");
  fs.writeFileSync(path, res);
}

module.exports = {
  updateProjectName,
};
