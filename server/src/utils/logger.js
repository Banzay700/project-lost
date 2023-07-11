import chalk from 'chalk'

export const consoleInfo = args =>
  console.log(chalk.cyan(`[INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args)
export const consoleWarn = args =>
  console.log(chalk.yellow(`[INFO]`), typeof args === 'string' ? chalk.yellowBright(args) : args)
export const consoleError = args =>
  console.log(chalk.red(`[INFO]`), typeof args === 'string' ? chalk.redBright(args) : args)
