import { Command } from "commander";

const program = new Command();
program
  .name("graft")
  .description("Source-first dependency manager")
  .version("0.0.1");

// Add command
program
  .command("add")
  .description("Add a dependency to the project")
  .argument("<package>", "Package name to add");

program.parse(process.argv);
