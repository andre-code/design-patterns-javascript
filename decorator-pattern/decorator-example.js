//What we're going to decorate
class IceCreamOrder {
    cost () {
        return 100;
    }
    getDescription () {
        return `Order Description \n * Base cream: ${this.cost()}`;
    }
}

/*Decorator 1*/
const toppingDecorator = (iceCreamOrder) => ({
    ...iceCreamOrder,
    cost: () => {
       return iceCreamOrder.cost() + 50;
    },
    getDescription: () => {
        return `${iceCreamOrder.getDescription()} \n * Topping: 50`;
    }
});

/*Decorator 2*/
const sauceDecorator = (iceCreamOrder) => ({
    ...iceCreamOrder,
    cost: () => {
        return iceCreamOrder.cost() + 10;
    },
    getDescription: () => {
        return `${iceCreamOrder.getDescription()} \n * Sauce: 10`;
    }
});

/*Decorator 3*/
const membershipDecorator  = (iceCreamOrder) => ({
    ...iceCreamOrder,
    cost: () => {
        return iceCreamOrder.cost() - 10;
    },
    getDescription: () => {
        return `${iceCreamOrder.getDescription()} \n * Discount membership: - 10`;
    }
});

/*
 * Use decorator classes
 */

// instance new ice cream order
let newIceCreamOrder =  new IceCreamOrder();

// Decorate it
newIceCreamOrder = toppingDecorator(newIceCreamOrder);
newIceCreamOrder = toppingDecorator(newIceCreamOrder);
newIceCreamOrder =  sauceDecorator(newIceCreamOrder);
newIceCreamOrder = membershipDecorator(newIceCreamOrder);

console.log(newIceCreamOrder.getDescription());
console.log(`Total cost: ${newIceCreamOrder.cost()}`);
