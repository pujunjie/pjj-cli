const { program } = require("commander");

function createHelpOptions() {
  program.option("-p --pjj", "a pjj cli");
  program.option(
    "-d --dest <dest>",
    "a destination floder, example:-d src/pages"
  );

  program.on("--help", () => {
    console.log("");
    console.log("Other:");
    console.log("  other options~");
  });
}
module.exports = createHelpOptions;
