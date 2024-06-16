#!/usr/bin/env node
import inquirer, { QuestionCollection } from "inquirer";
import fs from "fs";

const templates = fs.readdirSync(`${__dirname}/templates`);

const questions: QuestionCollection = [
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

inquirer
  .prompt(questions)
  .then(async (answers) => {
    const { default: template } = await import(
      `${__dirname}/templates/${answers.language}/index`
    );
    template(answers.projectName, answers.language);
  })
  .catch((error) => console.error(error));
