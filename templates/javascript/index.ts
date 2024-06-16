import { Template } from "@/types";
import logger from "@utils/Logger";
import createProjectCommand from "@utils/createProjectCommand";
import runCommand from "@utils/runCommand";
import chalk from "chalk";

export default (_projectName: string, template: Template) => {
  const { gitCheckoutCommand, installCommand, projectName } =
    createProjectCommand(_projectName, template);
  logger.info(
    `Creating a new ${template} project in ${chalk.bold(projectName)}`
  );
  const checkedOut = runCommand(gitCheckoutCommand);
  if (!checkedOut) process.exit(1);
  const installed = runCommand(installCommand);
  if (!installed) process.exit(1);
  logger.info(`cd ${projectName} && npm run dev`);
};
