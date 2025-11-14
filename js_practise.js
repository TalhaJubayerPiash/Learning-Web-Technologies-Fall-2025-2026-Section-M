console.log("Hello, World!"); 

let name = "Alice"; // String
const age = 25;    // Number
let isStudent = true; // Boolean

console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);


let temperature = 20;

if (temperature > 25) {
  console.log("It's hot!");
} else if (temperature < 10) {
  console.log("It's cold!");
} else {
  console.log("The weather is mild.");
}


for (let i = 0; i < 5; i++) {
  console.log(`Iteration number: ${i}`);

}

function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 7);
console.log(`The sum is: ${sum}`);


let fruits = ["Apple", "Banana", "Cherry"];

console.log(`First fruit: ${fruits[0]}`);
fruits.push("Date"); // Add an element
console.log(`All fruits: ${fruits}`);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(`Person's full name: ${person.firstName} ${person.lastName}`);

// In your HTML, you would have: <p id="demo"></p>
document.getElementById("demo").innerHTML = "Hello from JavaScript!";