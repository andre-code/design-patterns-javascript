// It export the class so everybody can create a new instance of it
export default class NiceLogger {
  constructor(){
    this.logs = [];
  }
  log(message) {
    this.logs.push(message);
    console.log(`New log: ${message}`);
  }
  printTotalLog() {
    console.log(`${this.logs.length} logs`);
  }
}