class Greeter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    greet () {
        return this.strategy.greet();
    }
}
class PoliteGreetingStrategy {
    greet() {
        return 'Hello.';
    }
}

class FriendlyGreetingStrategy {
    greet() {
        return 'Hey!.';
    }
}

class BoredGreetingStrategy {
    greet() {
        return 'sup.';
    }
}
const politeGreeter   = new Greeter(new PoliteGreetingStrategy());
const friendlyGreeter = new Greeter(new FriendlyGreetingStrategy());
const boredGreeter    = new Greeter(new BoredGreetingStrategy());
console.log(politeGreeter.greet());   //=> Hello.
console.log(friendlyGreeter.greet());   //=> Hey.
console.log(boredGreeter.greet());   //=> sup.