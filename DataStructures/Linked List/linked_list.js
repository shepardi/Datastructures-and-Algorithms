/* Implement Linked List Structure with Javascript */

/* Time Complexity:
    Access: O(n)
    Search: O(n)
    Insert: O(1)
    Remove: O(1) 
*/

/* 
    Singly-linked list: 
        linked list in which each node points to the next node and the last node points to null

    Doubly-linked list: 
        linked list in which each node has two pointers, p and n, such that p points to the previous node and n points to the next node; the last node's n pointer points to null

    Circular-linked list: 
        linked list in which each node points to the next node and the last node points back to the first node 
*/

/* ---- Node Class ---- */
class Node {
    constructor(data) {
        this.data = data;
        this.timestamp = new Date;
        this.next = null;
    }
}

/* ---- LinkedList Class ---- */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // ---- Methods ----

    // add(data)
    add(data) {
        // create a new node
        let node = new Node(data);

        // store current node
        let current = null;

        // if list is empty, add the data and make it the head

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;

            // iterate end of list
            while (current.next) {
                current = current.next;
            }

            // add node to the end of the list
            current.next = node;
        }

        // increment the size
        this.size++;
    }

    // insert (data, location)
    insert(data, index) {

        if (index > 0 && index > this.size) return false;
        else {
            // create a new node
            let node = new Node(data);
            let current, previous;

            // add the data to the first index
            if (index == 0) {
                node.next = this.head;
                this.head = node; // reset the head pointer to the start.
            }
            else {
                // set starting point
                current = this.head;
                let currIndex = 0;

                // iterate over the list to get position to insert
                while (currIndex < index) {
                    currIndex++;
                    previous = current;
                    current = current.next;
                }

                // adding a node
                node.next = current;
                previous.next = node;
            }

            // increment list size
            this.size++;
        }
    }

    // removeFrom(location)
    removeFrom(index) {
        if (index > 0 && index > this.size) return -1;
        else {
            let current, previous, currIndex = 0;
            current = this.head;
            previous = current;

            // deleting first index
            if (index === 0) {
                this.head = current.next;
            } else {
                // iterate over the list to the position to remove an element
                while (currIndex < index) {
                    currIndex++;
                    previous = current;
                    current = current.next;
                }

                // remove the element, garbage collection unused null values.
                previous.next = current.next;
            }
            this.size--;

            // return the removed element
            return current.data;
        }

    }
    // removeData(data)
    removeNode(data) {
        let current = this.head;
        let previous = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current element if found then remove the data and return true
            if (current.data == this.data) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    // indexOf(index)
    indexOf(index) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list with given data
            if (current.data == this.data) {
                return count;
            }
            count++;
            current = current.next;

        }

        // not found
        return -1;
    }

    // isEmpty()
    isEmpty() {
        return this.size == 0;
    }

    // size()
    listSize() {
        return this.size;
    }

    // printList()
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log(str);
    }
}


console.log("Test JavaScript LinkedList");
let myLinkedList = new LinkedList();
console.log(myLinkedList);
myLinkedList.add(15);
myLinkedList.add(23);
myLinkedList.add(33);
myLinkedList.printList();
let removed = myLinkedList.removeFrom(2);
console.log(` removed ${removed} from the list`);
let index = myLinkedList.indexOf(10);
console.log(` trying to remove 10: ${index}`);
