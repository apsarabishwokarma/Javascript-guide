// JavaScript Fundamentals Tutorial

// 1. Variables and Data Types
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean

// 2. Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Outputs: apple

// 3. Objects
let person = {
  name: "Jane",
  age: 30,
  isEmployed: true,
};
console.log(person.name); // Outputs: Jane

// 4. Functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Outputs: Hello, Alice!

// 5. Conditional Statements
let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// 6. Loops
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}

// 7. Array Methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// Try these examples in your console!
