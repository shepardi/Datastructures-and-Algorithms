/* Implement Stack Data Structure with Javascript */

/* Using Arrays */
class JSstack {
    constructor() {
        this.array = ["default element", "N/A"];
        this.timestamp = new Date;
    }

    getArray() {
        return this.array;
    }
}

console.log("test stack");
let newStack = new JSstack("string");
console.log(newStack);