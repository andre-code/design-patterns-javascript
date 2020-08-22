import Subject from "./subject.js";
import Observer from "./observer.js";

const observerOne = new Observer('Observer One');
const observerTwo = new Observer('Observer Two');
const observerThree = new Observer('Observer Three');

const observable = new Subject();
observable.subscribe(observerOne);
observable.subscribe(observerTwo);
observable.subscribe(observerThree);

observable.broadcast();