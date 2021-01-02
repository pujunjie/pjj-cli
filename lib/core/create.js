const { program } = require("commander");
const inquirer = require("inquirer");

const { createProject, addComponent, addPage } = require("./actions");

function createCommands() {
  program
    .command("create <project> [otherArgs...]")
    .description("clone a repository into a newly created directory")
    .action((project, otherArgs) => {
      let questions = [
        {
          type: "list",
          name: "router",
          message: "What router do you need?",
          choices: ["HashRouter", "BrowserRouter"],
        },
      ];

      inquirer.prompt(questions).then((answers) => {
        createProject(project, answers.router, otherArgs);
      });
    });

  program
    .command("addcpn <name>")
    .description(
      "add react component, example: pjj addcpn Message [-d src/components]"
    )
    .action((name) => {
      addComponent(name, program.dest);
    });

  program
    .command("addpage <name>")
    .description(
      "add react component, example: pjj addpage Home [-d src/pages]"
    )
    .action((name) => {
      addPage(name, program.dest);
    });
}

module.exports = createCommands;
