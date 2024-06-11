// 1. Variables (`var`, `let`, `const`)
console.log("=== 1. Variables (`var`, `let`, `const`) ===");
// Fill in the blanks to declare variables using var, let, and const
var globalVar = "I am a global variable";
let blockVar = "I am a block-scoped variable";
const constVar = "I cannot be reassigned";
console.log(globalVar); // Output: I am a global variable
console.log(blockVar);  // Output: I am a block-scoped variable
console.log(constVar);  // Output: I cannot be reassigned

// 2. Data Types
console.log("\n=== 2. Data Types ===");
// Fill in the blanks with appropriate data types
let number = 42;
let text = "Hello, World!";
let flag = true;
let array = [1, 2, 3];
let object = { key: "value" };
console.log("Number:", number);  // Output: 42
console.log("Text:", text);      // Output: Hello, World!
console.log("Boolean:", flag);   // Output: true
console.log("Array:", array);    // Output: [1, 2, 3]
console.log("Object:", object);  // Output: { key: "value" }

// 3. Operators and Expressions
console.log("\n=== 3. Operators and Expressions ===");
// Fill in the blanks with appropriate expressions
let sum = 10 + 5;
let difference = 10 - 5;
let product = 5 * 10;
let quotient = 4/ 2;
let isEqual = (10 == "10");
let isStrictEqual = (10 === "10");
let isGreater = (10 > 5);
console.log("Sum:", sum);                    // Output: 15
console.log("Difference:", difference);      // Output: 5
console.log("Product:", product);            // Output: 50
console.log("Quotient:", quotient);          // Output: 2
console.log("Is Equal:", isEqual);           // Output: true
console.log("Is Strict Equal:", isStrictEqual); // Output: false
console.log("Is Greater:", isGreater);       // Output: true

// 4. Control Structures
console.log("\n=== 4. Control Structures ===");
// Fill in the blanks to complete control structures
let age = 18;
if (age > 18) {
  console.log("Adult");  // Output: Adult
} else {
  console.log("Minor");
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");  // Output: Start of the week
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}

// 5. Functions and Scope
console.log("\n=== 5. Functions and Scope ===");
// Fill in the blanks to define and call a function
function greet(name) {
  return `Hello, ${name}!`;
}
let greeting = greet("Alice");
console.log(greeting);  // Output: Hello, Alice!

function scopeExample() {
  var functionScoped = "I am function scoped";
  let blockScoped = "I am block scoped";
  const constant = "I cannot be reassigned";

  console.log(functionScoped);  // Output: I am function scoped
  console.log(blockScoped);     // Output: I am block scoped
  console.log(constant);        // Output: I cannot be reassigned
}
scopeExample();

// 6. Objects and Arrays
console.log("\n=== 6. Objects and Arrays ===");
// Fill in the blanks to create and manipulate objects and arrays
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log("Name:", person.name);  // Output: Alice
console.log("Age:", person.age);    // Output: 30
person.greet();  // Output: Hello, my name is Alice

let numbers = [1, 2, 3];
console.log("Numbers:", numbers);  // Output: [1, 2, 3]

// 7. Template Literals
console.log("\n=== 7. Template Literals ===");
// Fill in the blanks to use template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);  // Output: Hello, Alice!

// 8. Destructuring Assignment
console.log("\n=== 8. Destructuring Assignment ===");
// Fill in the blanks to use destructuring assignment
let person = { name: "Alice", age: 30 };
let { name, age } = person;
console.log("Name:", name);  // Output: Alice
console.log("Age:", age);    // Output: 30

let numbers = [1, 2, 3];
let [first, second, third] = numbers;
console.log("First:", first);  // Output: 1
console.log("Second:", second); // Output: 2
console.log("Third:", third);  // Output: 3


// 9. Spread and Rest Operators
console.log("\n=== 9. Spread and Rest Operators ===");
// Fill in the blanks to use spread and rest operators
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log("New Numbers:", newNumbers);  // Output: [1, 2, 3, 4, 5]

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
let total = sum(1, 2, 3, 4, 5);
console.log("Sum:", total);  // Output: 15

// 10. Async/Await
console.log("\n=== 10. Async/Await ===");
// Fill in the blanks to use async/await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);  // Output: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// 11. Event Handling
console.log("\n=== 11. Event Handling ===");
// Simulate event handling using a simple example
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button was clicked!");  // Output: Button was clicked!
});

// 12.DOM Manipulation
console.log("\n=== 12. DOM Manipulation ===");
// Fill in the blanks to manipulate the DOM
let header = document.getElementById("header");
header.innerText = "New Header";  // The header text should be changed to "New Header"

let special = document.querySelector(".special");
special.style.color = "blue";  // The color of the element with class "special" should be changed to blue

// 13. ES6 and Beyond
console.log("\n=== 13. ES6 and Beyond ===");
// Fill in the blanks to use ES6 features
let arrowFunction = (name) => `Hello, ${name}!`;
console.log(arrowFunction("Alice"));  // Output: Hello, Alice!
// 14. Arrow Functions
console.log("\n=== 14. Arrow Functions ===");
// Fill in the blanks to define and call an arrow function
let greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));  // Output: Hello, Alice!
