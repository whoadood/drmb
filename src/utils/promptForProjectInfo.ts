import inquirer from "inquirer";
import chalk from "chalk";
import { ProjectInfo } from "../types";

export async function promptForProjectInfo(): Promise<{
  projectInfo: ProjectInfo;
  license: string;
}> {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "account",
      message: chalk.cyan("enter your github username"),
    },
    {
      type: "input",
      name: "project",
      message: chalk.cyan("enter this project name"),
    },
    {
      type: "input",
      name: "url",
      message: chalk.cyan("enter this project url"),
    },
    {
      type: "input",
      name: "description",
      message: chalk.cyan("enter a description for this project"),
    },
    {
      type: "input",
      name: "license",
      message: chalk.cyan("enter the license for this project"),
    },
  ]);

  return {
    projectInfo: {
      account: answers.account,
      project: answers.project,
      url: answers.url,
      description: answers.description,
    },
    license: answers.license,
  };
}
