const { program } = require("commander");
const { createProject } = require("./actions");

function createCommands() {
  program
    .command("create <project> [otherArgs...]")
    .description("clone a repository into a newly created directory")
    .action((project, otherArgs) => {
      createProject(project, otherArgs);
    });
}

module.exports = createCommands;
