import { ProjectInfo } from "../types";
import { makeTitle, makeFooter, makeLicense, makeCoffee } from "./consts";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { logger } from "./logger";

export async function createFileContent(
  projectInfo: ProjectInfo,
  lcns: string
) {
  try {
    logger.info("creating readme content");
    const title = makeTitle(projectInfo);
    const coffee = makeCoffee(projectInfo);
    const footer = makeFooter(projectInfo);
    const license = makeLicense(projectInfo, lcns);
    const template = fs.readFileSync(
      path.resolve(
        decodeURI(fileURLToPath(import.meta.url)),
        "../../src/templates/hundred.md"
      ),
      "utf8"
    );
    logger.success("content created");

    return `${title}

${coffee}
${template}
${footer}
${license}
`;
  } catch (err) {
    logger.error((err as Error).message);
    process.exit(1);
  }
}
