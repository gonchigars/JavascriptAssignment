const assert = require('assert');

function runTests() {
  console.log("Running tests...");

  // Test Variables
  assert.strictEqual(globalVar, "I am a global variable");
  assert.strictEqual(blockVar, "I am a block-scoped variable");
  assert.strictEqual(constVar, "I cannot be reassigned");

  // Test Data Types
  assert.strictEqual(number, 42);
  assert.strictEqual(text, "Hello, World!");
  assert.strictEqual(flag, true);
  assert.deepStrictEqual(array, [1, 2, 3]);
  assert.deepStrictEqual(object, { key: "value" });

  // Test Operators and Expressions
  assert.strictEqual(sum, 15);
  assert.strictEqual(difference, 5);
  assert.strictEqual(product, 50);
  assert.strictEqual(quotient, 2);
  assert.strictEqual(isEqual, true);
  assert.strictEqual(isStrictEqual, false);
  assert.strictEqual(isGreater, true);

  // Test Control Structures
  assert.strictEqual(age, 20);
  assert.strictEqual(day, "Monday");

  // Test Functions and Scope
  assert.strictEqual(greet("Alice"), "Hello, Alice!");
  assert.strictEqual(greeting, "Hello, Alice!");
  assert.strictEqual(scopeExample(), undefined);

  // Test Objects and Arrays
  assert.strictEqual(person.name, "Alice");
  assert.strictEqual(person.age, 30);
  assert.strictEqual(numbers[0], 1);
  assert.strictEqual(numbers[1], 2);
  assert.strictEqual(numbers[2], 3);

  // Test Template Literals
  assert.strictEqual(greeting, "Hello, Alice!");

  // Test Destructuring Assignment
  assert.strictEqual(name, "Alice");
  assert.strictEqual(age, 30);
  assert.strictEqual(first, 1);
  assert.strictEqual(second, 2);
  assert.strictEqual(third, 3);

  // Test Spread and Rest Operators
  assert.deepStrictEqual(newNumbers, [1, 2, 3, 4, 5]);
  assert.strictEqual(total, 15);

  // Test Async/Await
  fetchData().then(data => {
    assert.deepStrictEqual(data, { userId: 1, id: 1, title: "delectus aut autem", completed: false });
  }).catch(error => {
    assert.fail(error);
  });

  console.log("All tests passed!");
}

// Run the tests
runTests();
