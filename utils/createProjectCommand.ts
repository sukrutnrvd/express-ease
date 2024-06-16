import { Template } from "@/types";

const createProjectCommand = (projectName: string, template: Template) => {
  const gitCheckoutCommand = `git clone -b ${template} https://github.com/Hugo0o0/express-ease.git ${projectName}`;
  const installCommand = `cd ${projectName} && npm install`;
  return { projectName, gitCheckoutCommand, installCommand };
};

export default createProjectCommand;
