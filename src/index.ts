import { title } from "./utils/consts";
import { logger } from "./utils/logger";
import { createFile } from "./utils/createFile";
import { createFileContent } from "./utils/createFileContent";

export async function cli() {
  console.log(title);

  logger.info(`Easily generate a README.md beautiful for your project
  `);

  const content = await createFileContent(
    {
      project: "slicewars",
      account: "whoadood",
      description: "test description to see if this works",
      url: "slicewars.vercel.app",
    },
    "MIT"
  );
  await createFile(content);

  process.exit(0);
}
