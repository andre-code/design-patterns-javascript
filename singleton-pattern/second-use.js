// import NiceLogger from './sigleton-pattern-before.js';
import logger from './sigleton-pattern-after.js';

export default function secondUse() {
  // const logger = new NiceLogger();
  logger.printTotalLog();
  logger.log('My Second log');
  logger.printTotalLog();
}