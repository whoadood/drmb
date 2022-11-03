import { ProjectInfo } from "../types";
import { makeBadges, makeLicense, makeCoffee } from "./consts";
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
    const badges = makeBadges(projectInfo);
    const license = makeLicense(projectInfo, lcns);
    const coffee = makeCoffee(projectInfo);
    const template = await fs.readFileSync(
      path.resolve(
        decodeURI(fileURLToPath(import.meta.url)),
        "../../src/templates/igorantun.md"
      ),
      "utf8"
    );
    logger.success("content created");

    return `
# ${projectInfo.project}
				
${badges}
${projectInfo.description}
${coffee}
${template}
${license}
`;
  } catch (err) {
    logger.error((err as Error).message);
    process.exit(1);
  }
}
