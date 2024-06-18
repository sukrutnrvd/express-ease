#!/usr/bin/env node
import inquirer from "inquirer";
import {
  argsOptions,
  fullSetupPrompQuestions,
  sections,
} from "@contants/constants";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import Logger from "@utils/Logger";

const argsResult = commandLineArgs(argsOptions);
const usage = commandLineUsage(sections);

const logHelpCommand = () => {
  Logger.message(usage);
};

if (argsResult.help) {
  logHelpCommand();
  process.exit(0);
} else if (argsResult.template && argsResult.name) {
  (async () => {
    const { default: template } = await import(
      `${__dirname}/templates/${argsResult.template}/index`
    );
    template(argsResult.name, argsResult.template);
  })();
} else {
  inquirer
    .prompt(fullSetupPrompQuestions)
    .then(async (answers) => {
      const { default: template } = await import(
        `${__dirname}/templates/${answers.language}/index`
      );

      template(answers.projectName, answers.language);
    })
    .catch((error) => console.error(error));
}
