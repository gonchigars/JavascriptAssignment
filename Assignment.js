// 1. Variables (`var`, `let`, `const`)
console.log("=== 1. Variables (`var`, `let`, `const`) ===");
// Fill in the blanks to declare variables using var, let, and const
var globalVar = "_____";
let blockVar = "_____";
const constVar = "_____";
console.log(globalVar); // Output: I am a global variable
console.log(blockVar);  // Output: I am a block-scoped variable
console.log(constVar);  // Output: I cannot be reassigned

// 2. Data Types
console.log("\n=== 2. Data Types ===");
// Fill in the blanks with appropriate data types
let number = ___;
let text = "_____";
let flag = ___;
let array = [__, __, __];
let object = { key: "_____" };
console.log("Number:", number);  // Output: 42
console.log("Text:", text);      // Output: Hello, World!
console.log("Boolean:", flag);   // Output: true
console.log("Array:", array);    // Output: [1, 2, 3]
console.log("Object:", object);  // Output: { key: "value" }

// 3. Operators and Expressions
console.log("\n=== 3. Operators and Expressions ===");
// Fill in the blanks with appropriate expressions
let sum = __ + __;
let difference = __ - __;
let product = __ * __;
let quotient = __ / __;
let isEqual = (__ == "10");
let isStrictEqual = (__ === "10");
let isGreater = (__ > __);
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
let age = __;
if (age > 18) {
  console.log("_____");  // Output: Adult
} else {
  console.log("_____");
}

let day = "_____";
switch (day) {
  case "Monday":
    console.log("_____");  // Output: Start of the week
    break;
  case "Friday":
    console.log("_____");
    break;
  default:
    console.log("_____");
}

// 5. Functions and Scope
console.log("\n=== 5. Functions and Scope ===");
// Fill in the blanks to define and call a function
function greet(name) {
  return `Hello, ${____}!`;
}
let greeting = greet("_____");
console.log(greeting);  // Output: Hello, Alice!

function scopeExample() {
  var functionScoped = "_____";
  let blockScoped = "_____";
  const constant = "_____";

  console.log(functionScoped);  // Output: I am function scoped
  console.log(blockScoped);     // Output: I am block scoped
  console.log(constant);        // Output: I cannot be reassigned
}
scopeExample();

// 6. Objects and Arrays
console.log("\n=== 6. Objects and Arrays ===");
// Fill in the blanks to create and manipulate objects and arrays
let person = {
  name: "_____",
  age: __,
  greet: function() {
    console.log(`Hello, my name is ${this._____}`);
  }
};
console.log("Name:", person.____);  // Output: Alice
console.log("Age:", person.____);    // Output: 30
person.greet();  // Output: Hello, my name is Alice

let numbers = [__, __, __];
console.log("Numbers:", numbers);  // Output: [1, 2, 3]

// 7. Template Literals
console.log("\n=== 7. Template Literals ===");
// Fill in the blanks to use template literals
let name = "_____";
let greeting = `Hello, ${____}!`;
console.log(greeting);  // Output: Hello, Alice!

// 8. Destructuring Assignment
console.log("\n=== 8. Destructuring Assignment ===");
// Fill in the blanks to use destructuring assignment
let person = { name: "Alice", age: __ };
let { ____, ____ } = person;
console.log("Name:", ____);  // Output: Alice
console.log("Age:", ____);    // Output: 30

let numbers = [__, __, __];
let [first, second, third] = numbers;
console.log("First:", ____);  // Output: 1
console.log("Second:", ____); // Output: 2
console.log("Third:", ____);  // Output: 3

// 9. Spread and Rest Operators
console.log("\n=== 9. Spread and Rest Operators ===");
// Fill in the blanks to use spread and rest operators
let numbers = [__, __, __];
let newNumbers = [...numbers, __, __];
console.log("New Numbers:", newNumbers);  // Output: [1, 2, 3, 4, 5]

function sum(...____) {
  return args.reduce((acc, val) => acc + val, 0);
}
let total = sum(__, __, __, __, __);
console.log("Sum:", ____);  // Output: 15

// 10. Async/Await
console.log("\n=== 10. Async/Await ===");
// Fill in the blanks to use async/await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.____();
    console.log(data);  // Output: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  } catch (error) {
    console.log(____);
  }
}
fetchData();

// 11. Event Handling
console.log("\n=== 11. Event Handling ===");
// Simulate event handling using a simple example
document.getElementById("myButton").addEventListener("____", function() {
  console.log("_____");  // Output: Button was clicked!
});

// 12. DOM Manipulation
console.log("\n=== 12. DOM Manipulation ===");
// Fill in the blanks to manipulate the DOM
let header = document.getElementById("_____");
header.innerText = "_____";  // The header text should be changed to "New Header"

let special = document.querySelector("_____");
special.style.color = "_____";  // The color of the element with class "special" should be changed to blue

// 13. ES6 and Beyond
console.log("\n=== 13. ES6 and Beyond ===");
// Fill in the blanks to use ES6 features
let arrowFunction = (name) => `Hello, ${____}!`;
console.log(arrowFunction("_____"));  // Output: Hello, Alice!

// 14. Arrow Functions
console.log("\n=== 14. Arrow Functions ===");
// Fill in the blanks to define and call an arrow function
let greet = (name) => `Hello, ${____}!`;
console.log(greet("_____"));  // Output: Hello, Alice!
