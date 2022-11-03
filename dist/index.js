import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from 'chalk';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import inquirer from 'inquirer';

const title = gradient.pastel.multiline(figlet.textSync("Dont Read Me Bro"));
function makeTitle(title) {
    return gradient.pastel.multiline(figlet.textSync(title));
}
function makeBadges(projectInfo) {
    const account = projectInfo.account.split(" ").join("%20");
    const project = projectInfo.project.split(" ").join("%20");
    return `[![GitHub Stars](https://img.shields.io/github/stars/${account}/${project}.svg)](https://github.com/${account}/${project}/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/${account}/${project}.svg)](https://github.com/${account}/${project}/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/${account}/${project}) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://${projectInfo.url})`;
}
function makeLicense(projectInfo, license) {
    return `
## License

> You can check out the full license [here](https://github.com/${projectInfo.account}/${projectInfo.project}/LICENSE)

This project is licensed under the terms of the **${license}** license.
`;
}
function makeCoffee(projectInfo) {
    return `
  ---
  
  ## Buy me a coffee

  Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)
  
  <a href="https://www.buymeacoffee.com/${projectInfo.account}" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
  `;
}

const logger = {
    info(msg) {
        console.log(chalk.cyan(msg));
    },
    warn(msg) {
        console.log(chalk.yellow(`${chalk.bold("warn:")} ${msg}`));
    },
    success(msg) {
        console.log(chalk.green(`${chalk.bold("success:")} ${msg}`));
    },
    error(msg) {
        console.log(chalk.red(`${chalk.bold("error:")} ${msg}`));
    },
};

async function createFile(content) {
    logger.info("writing file to project root");
    fs.writeFileSync(`${process.cwd()}/README.md`, content);
    logger.success("created README.md");
}

async function createFileContent(projectInfo, lcns) {
    try {
        logger.info("creating readme content");
        const badges = makeBadges(projectInfo);
        const license = makeLicense(projectInfo, lcns);
        const coffee = makeCoffee(projectInfo);
        const template = fs.readFileSync(path.resolve(decodeURI(fileURLToPath(import.meta.url)), "../../src/templates/igorantun.md"), "utf8");
        logger.success("content created");
        return `${makeTitle(projectInfo.project)}<br />
				
${badges}
<br /><br />
${projectInfo.description}
${coffee}
${template}
${license}
`;
    }
    catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
}

async function promptForProjectInfo() {
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

async function cli() {
    console.log(title);
    logger.info(`Easily generate a README.md beautiful for your project
  `);
    const { projectInfo, license } = await promptForProjectInfo();
    const content = await createFileContent(projectInfo, license);
    await createFile(content);
    process.exit(0);
}

export { cli };
