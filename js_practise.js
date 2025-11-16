console.log("Hello, World!"); 

let name = "Alice"; 
const age = 25;    
let isStudent = true; 

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
fruits.push("Date"); 
console.log(`All fruits: ${fruits}`);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(`Person's full name: ${person.firstName} ${person.lastName}`);

<p id="demo"></p>
document.getElementById("demo").innerHTML = "Hello from JavaScript!";