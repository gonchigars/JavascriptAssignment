

/**### 1. Introduction to JavaScript Fundamentals (Variable, Let, const)

**Exercise 1**:
- Declare a variable using `var`, `let`, and `const`.
- Try reassigning values to each variable. Note down the results and explain why. **/
// Using var
var x = 10;
x = 20;
console.log(x); // Output: 20

// Using let
let y = 10;
y = 20;
console.log(y); // Output: 20

// Using const
const z = 10;
z = 20; // Error: Assignment to constant variable.
console.log(z); // Output: 10

/**Exercise 2**:
- Explain the difference between `var`, `let`, and `const` in terms of scope and reassignment.

/**he var keyword is used to declare a variable. It is function-scoped, meaning the variable is accessible throughout the entire function.
The let keyword is used to declare a block-scoped variable. It is only accessible within the block it is declared in.
The const keyword is used to declare a constant variable. Once a value is assigned to a constant, it cannot be reassigned. **/
 
/**  . Variables and Data Types */

/**Exercise 1**:
- Declare variables of different data types: string, number, boolean, null, undefined, object, and array. */
 //String
let name = "Alice";  

// Number
let age = 30;  

// Boolean
let isStudent = true;  

// Null
let emptyValue = null;  

// Undefined
let notAssigned;  

// Object
let person = {  
  name: "Alice",
  age: 30,
  isStudent: true
};

// Array
let hobbies = ["reading", "hiking", "coding"];  

// Output each variable to the console
console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Null:", emptyValue);
console.log("Undefined:", notAssigned);
console.log("Object:", person);
console.log("Array:", hobbies);


/**Exercise 2 */
/**- Use `typeof` to check the data type of each variable. */
console.log(typeof name);  // Output: string
console.log(typeof age);  // Output: number
console.log(typeof isStudent);  // Output: boolean
console.log(typeof emptyValue);  // Output: object
console.log(typeof notAssigned);  // Output: undefined
console.log(typeof person);  // Output: object
console.log(typeof hobbies);  // Output: object

/**  3. Operators and Expressions */

/**Exercise 1**:
- Perform arithmetic operations (+, -, *, /, %) on two numbers and print the results. */
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log(`Sum: ${sum}`);  

// Subtraction
let difference = num1 - num2;
console.log(`Difference: ${difference}`);  

// Multiplication
let product = num1 * num2;
console.log(`Product: ${product}`);  

// Division
let quotient = num1 / num2;
console.log(`Quotient: ${quotient}`);  
// Modulus 
let remainder = num1 % num2;
console.log(`Remainder: ${remainder}`);  


/**Exercise 2:
- Use comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two values and print the results. */
// Equality 
console.log(2 == "2"); // Output: true
console.log(2 === "2"); // Output: false

// Inequality   
console.log(2 != "2"); // Output: false
console.log(2 !== "2"); // Output: true

// Greater than 
console.log(2 > 1); // Output: true

// Less than 
console.log(2 < 1); // Output: false

// Greater than or equal to 
console.log(2 >= 1); // Output: true

// Less than or equal to 
console.log(2 <= 1); // Output: false

/** 4. Control Structures

**Exercise 1**:
- Write a function that takes a number as input and prints whether it is even or odd using if-else statements. */

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
      console.log(`${number} is even.`);
  } else {
      console.log(`${number} is odd.`);
  }
}



/**Exercise 2**:
- Write a function that prints numbers from 1 to 10 using a for loop. */
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
      console.log(i);
  }
}

printNumbers();


/** ### 5. Functions and Scope

**Exercise 1**:
- Write a function that calculates the factorial of a number using a loop. */

/**Exercise 2**:
- Demonstrate the difference between local and global scope by creating variables inside and outside a function. */

 /** ### 6. Objects and Arrays

**Exercise 1**:
- Create an object representing a book with properties like title, author, and pages. Access and print each property. */

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180
};
console.log("Title:", book.title);   // Output: Title: The Great Gatsby
console.log("Author:", book.author); // Output: Author: F. Scott Fitzgerald
console.log("Pages:", book.pages);   // Output: Pages: 180


/**Exercise 2**:
- Create an array of numbers and find the sum of all elements using a loop. */
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of all elements:", sum); 


/**### 7. Template Literals

Exercise**:
- Create a string using template literals that includes variables and expressions.

### 8. Destructuring Assignment

**Exercise**:
- Use destructuring to extract values from an object and an array.

### 9. Spread and Rest Operators

**Exercise 1**:
- Use the spread operator to combine two arrays into one.

**Exercise 2**:
- Use the rest operator to write a function that accepts any number of arguments and returns their sum.

### 10. Async/Await

**Exercise**:
- Write an async function that fetches data from a public API and logs the response.

### 11. Event Handling

**Exercise**:
- Add an event listener to a button that logs a message when clicked.



### 13. ES6 and Beyond

**Exercise**:
- Use ES6 features like `let`, `const`, arrow functions, template literals, and destructuring to write a function that creates a greeting message.

### 14. Arrow Functions

**Exercise**:
- Convert a regular function to an arrow function. */
