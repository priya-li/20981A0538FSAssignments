// Basic Types
var a: number = 10;
var b: string = "Hello";
var c: boolean = true;
var numbersArray: number[] = [1, 2, 3, 4, 5];
var tuple: [string, number] = ["John", 25];

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Functions
var add = (a1: number, a2: number): number => {
    return a1 + a2;
};

var capitalize = (s1: string): string => {
    return s1.charAt(0).toUpperCase() + s1.slice(1);
};

// Interfaces
interface Person {
    name: string;
    age: number;
    email: string;
}

var user: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Classes
class Car {
    constructor(public make: string, public model: string, public year: number) {}

    displayInfo(): void {
        console.log("Make:", this.make);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
    }
}

var carInstance = new Car("Toyota", "Camry", 2020);
carInstance.displayInfo();

// Generics
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

var reversedArray = reverseArray([1, 2, 3, 4, 5]);
console.log("Reversed Array:", reversedArray);
