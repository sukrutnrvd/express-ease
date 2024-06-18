import { Template } from "@/types";
import createProjectCommand from "./createProjectCommand";
import runCommand from "./runCommand";
import chalk from "chalk";
import Logger from "./Logger";
import updatePackageJson from "./updatePackageJson";

const createTemplate = (_projectName: string, template: Template) => {
  const { gitCheckoutCommand, installCommand, projectName } =
    createProjectCommand(_projectName, template);
  Logger.info(
    `Creating a new ${template} project in ${chalk.bold(projectName)}`
  );
  const checkedOut = runCommand(gitCheckoutCommand);
  if (!checkedOut) process.exit(1);
  const installed = runCommand(installCommand);
  if (!installed) process.exit(1);
  updatePackageJson(projectName);
  Logger.info(`cd ${projectName} && npm run dev`);
};

export default createTemplate;
