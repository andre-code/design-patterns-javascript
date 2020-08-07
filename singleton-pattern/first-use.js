// import NiceLogger from './sigleton-pattern-before.js';
import logger from './sigleton-pattern-after.js';

export default function firstUse() {
  // const logger = new NiceLogger();
  logger.printTotalLog();
  logger.log('My first log');
  logger.printTotalLog();
}