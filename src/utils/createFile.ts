import fs from "fs";
import { logger } from "./logger";

export async function createFile(content: string) {
  logger.info("writing file to project root");
  fs.writeFileSync(`${process.cwd()}/README.md`, content);
  logger.success("created README.md");
}
