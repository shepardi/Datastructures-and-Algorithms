/* Implement Stack Data Structure with Javascript */

/* Using a class */
class JSstack {
    constructor() {
        this.array = ["default element", "N/A"];
        this.timestamp = new Date;
    }

    getArray() {
        return this.array;
    }

    push(element) {
        return this.array.unshift(element);
    }

    pop() {
        return this.array.shift();
    }
}

console.log("Test JavaScript stack");
let jsStack = new JSstack();
jsStack.push("new Element")
console.log(jsStack.pop());
console.log(jsStack);
