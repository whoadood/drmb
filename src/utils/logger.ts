import chalk from "chalk";

export const logger = {
  info(msg: string) {
    console.log(chalk.cyan(`${chalk.bold("info:")} ${msg}`));
  },
  warn(msg: string) {
    console.log(chalk.yellow(`${chalk.bold("warn:")} ${msg}`));
  },
  success(msg: string) {
    console.log(chalk.green(`${chalk.bold("success:")} ${msg}`));
  },
  error(msg: string) {
    console.log(chalk.red(`${chalk.bold("error:")} ${msg}`));
  },
};
