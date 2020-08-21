# Design Patterns Javascript
A design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.


## GoF
The GoF Design Patterns are broken into three categories: Creational Patterns for the creation of objects; Structural Patterns to provide relationship between objects; and finally, Behavioral Patterns to help define how objects interact.

### Creational Design Patterns
Creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.
- Builder: Uses to create complex objects. 
- Singleton: Ensures only one instance of an object is created.
- Abstract Factory (pending): Allows the creation of objects without specifying their concrete type.
- Factory Method (pending): Creates objects without specifying the exact class to create.

### Structural Design Patterns
Structural Design Patterns are Design Patterns that ease the design by identifying a simple way to realize relationships between entities.

- Facade (pending): Provides a simple interface to a more complex underlying object
- Decorator (pending): Allows for an object’s behavior to be extended dynamically at run time.
- Proxy (pending): Provides a placeholder interface to an underlying object to control access, reduce cost, or reduce complexity.

### Behavior Design Patterns
Behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

- Null Object: TDesigned to act as a default value of an object
- Strategy: Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.
- Interpreter (pending): Implements a specialized language.
- Iterator (pending): Accesses the elements of an object sequentially without exposing its underlying representation.
- Memento (pending): Provides the ability to restore an object to its previous state.
- Observer(pending): Is a publish/subscribe pattern which allows a number of observer objects to see an event.