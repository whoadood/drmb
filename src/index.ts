import { title } from "./utils/consts";
import { logger } from "./utils/logger";
import { createFile } from "./utils/createFile";
import { createFileContent } from "./utils/createFileContent";
import { promptForProjectInfo } from "./utils/promptForProjectInfo";

export async function cli() {
  console.log(title);

  logger.info(`Easily generate a README.md beautiful for your project
  `);

  const { projectInfo, license } = await promptForProjectInfo();
  const content = await createFileContent(projectInfo, license);
  await createFile(content);

  process.exit(0);
}
