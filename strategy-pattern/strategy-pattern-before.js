class Greeter {
    constructor(type) {
        this.type = type;
    }
    greet () {
        switch (this.type) {
            case 'polite':
                return 'Hello.';
            case 'friendly':
                return 'Hey!.';
            case 'bored':
                return 'sup.';
            default:
                return 'Hi';
        }
    }
}
const politeGreeter   = new Greeter('polite');
const friendlyGreeter = new Greeter('friendly');
const boredGreeter    = new Greeter('bored');
console.log(politeGreeter.greet());   //=> Hello.
console.log(friendlyGreeter.greet());   //=> Hey.
console.log(boredGreeter.greet());   //=> sup.