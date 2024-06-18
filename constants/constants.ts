import { QuestionCollection } from "inquirer";
import fs from "fs";
import { OptionDefinition } from "command-line-args";
import { Section } from "command-line-usage";

const templates = fs.readdirSync(`${__dirname}/../templates`);
const fullSetupPrompQuestions: QuestionCollection = [
  {
    type: "list",
    name: "language",
    message: "Which language do you want to use?",
    choices: templates,
  },
  {
    type: "input",
    name: "projectName",
    message: "Enter project name",

    validate: (name: string) => {
      const validNameRegex = /^[a-z0-9-_]{3,50}$/;

      const invalidCharacters = /[<>:"/\\|?*\x00-\x1F]/;

      if (
        !name ||
        name.trim() !== name ||
        !validNameRegex.test(name) ||
        invalidCharacters.test(name)
      ) {
        return false;
      }

      return true;
    },
  },
];

const argsOptions: OptionDefinition[] = [
  { name: "help", alias: "h", type: Boolean, defaultValue: false },
  { name: "template", alias: "t", type: String },
  { name: "name", alias: "n", type: String },
];

const sections: Section[] = [
  {
    header: "Express Ease Launcher",
    content: "A CLI tool to generate Express.js project with ease",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "template",
        alias: "t",
        typeLabel: "{underline template}",
        description: "Template to use for the project",
      },
      {
        name: "name",
        alias: "n",
        typeLabel: "{underline template}",
        description: "Name of the project",
      },
    ],
  },
];

export { fullSetupPrompQuestions, argsOptions, sections };
