export default class Observer {
    constructor(name) {
        this.name = name;
    }
    call() {
        console.log(`Called ${this.name}`);
    }
}