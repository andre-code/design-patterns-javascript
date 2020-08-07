// Dont export the class...
class NiceLogger {
  constructor(){
    if(NiceLogger.instance == null) {
      this.logs = [];
      NiceLogger.instance = this;
    }
    return NiceLogger.instance;
  }
  log(message) {
    this.logs.push(message);
    console.log(`New log: ${message}`);
  }
  printTotalLog() {
    console.log(`${this.logs.length} logs`);
  }
}
// only export the instance
const logger =  new NiceLogger();
Object.freeze(logger);
export default logger;