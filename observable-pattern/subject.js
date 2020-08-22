export default class Subject {
    observers = [];
    subscribe (observer) {
        this.observers.push(observer)
    }
    unsubscribe(observerToRemove) {
        this.observers = this.observers.filter( observer => observer !== observerToRemove);
    }
    broadcast() {
        this.observers.forEach( observer => observer.call())
    }
}