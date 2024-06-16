import chalk from "chalk";

class Logger {
  info(message: string) {
    console.log(chalk.blue(message));
  }
  error(message: string) {
    console.error(chalk.red(message));
  }
}

export default new Logger();
