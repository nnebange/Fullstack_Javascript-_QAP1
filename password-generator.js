const yargs = require("yargs");
const generatePassword = require("./generate-password");

const argv = yargs
  .usage("Usage: $0 [options]")
  .option("length", {
    alias: "l",
    type: "number",
    default: 10,
    describe: "Password length",
  })
  .option("numbers", {
    alias: "n",
    type: "boolean",
    default: false,
    describe: "Include numbers",
  })
  .option("capital", {
    alias: "c",
    type: "boolean",
    default: false,
    describe: "Include capital letters",
  })
  .option("symbols", {
    alias: "s",
    type: "boolean",
    default: false,
    describe: "Include symbols",
  })
  .help("help").argv;

const password = generatePassword(
  argv.length,
  argv.numbers,
  argv.capital,
  argv.symbols
);
console.log(password);
