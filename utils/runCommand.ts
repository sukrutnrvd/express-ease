import { execSync } from "child_process";
import logger from "./Logger";

const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error: any) {
    logger.error(error);
    return false;
  }
  return true;
};

export default runCommand;
