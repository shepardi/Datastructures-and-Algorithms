/* Main app logic */

console.log("Using index.js");

// Setting up options to categorize ds and algo's.
let options = ["ds", "alg"];


// DS List & Algo List
const ds_and_algos = [
    {
        dataStructures: ["Stack", "Queue", "Linked List", "Heap", "Tree", "Graph", "Hash Table"]
    },
    {
        sortingAlgorithms: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
        searchingAlgorithms: ["Binary Search", "DFS", "BFS"],
    },


]



/* Data Structures List */
// Loop to generate DOM elements for the Data Structures List
ds_and_algos[options.indexOf("ds")].dataStructures.forEach((dataStruct) => {

    // Create a DOM element for each DS and give it a name attributes.
    let dataStructElement = document.createElement("div");
    dataStructElement.setAttribute("name", `${dataStruct}`);
    dataStructElement.setAttribute("id", `${dataStruct}`);
    dataStructElement.innerHTML = `<h3 style="background: gold">${dataStruct}</h3>`;

    // Insert DS Button into the div element with class "ds-list"
    document.querySelector(".ds-list").appendChild(dataStructElement);

});

/* Sorting Algorithms List */
// Loop to generate DOM elements for the Sorting Algorithms List
ds_and_algos[options.indexOf("alg")].sortingAlgorithms.forEach((algorithm) => {

    // Create a DOM element for each sorting algorithm, give them attributes.
    let algorithmElement = document.createElement("div");
    algorithmElement.setAttribute("name", `${algorithm}`);
    algorithmElement.setAttribute("id", `${algorithm}`);
    algorithmElement.innerHTML = `<h3 style="background: lightgrey;">${algorithm}</h3>`

    // Insert sorting algorithm into the div element with class "alg-list"
    document.querySelector(".sort-alg-list").appendChild(algorithmElement);

});

/* Searching Algorithms List */
// Loop to generate DOM elements for the Searching Algorithms List
ds_and_algos[options.indexOf("alg")].searchingAlgorithms.forEach((algorithm) => {

    // Create a DOM element for each sorting algorithm, give them attributes.
    let algorithmElement = document.createElement("div");
    algorithmElement.setAttribute("name", `${algorithm}`);
    algorithmElement.setAttribute("id", `${algorithm}`);
    algorithmElement.innerHTML = `<h3 style="background: lightgreen;">${algorithm}</h3>`

    // Insert sorting algorithm into the div element with class "alg-list"
    document.querySelector(".search-alg-list").appendChild(algorithmElement);

});