---
## JavaScript Learning: From Basic to Advanced

Welcome to **JavaScript Learning** – a structured roadmap covering everything from **fundamentals** to **advanced concepts** with **theory, exercises, solutions, and interview questions**.
---

### **What You’ll Learn**

✔️ JavaScript Basics (`var`, `let`, `const`, data types, operators)  
✔️ Control Flow (`if-else`, loops, switch)  
✔️ Functions & Scope (Arrow functions, Closures, Higher-Order Functions)  
✔️ Arrays & Objects (`map`, `filter`, `reduce`, destructuring)  
✔️ DOM Manipulation (Selectors, Events, Forms)  
✔️ Asynchronous JavaScript (Promises, Async/Await, Fetch API)  
✔️ Object-Oriented JavaScript (Prototypes, Classes, `this`)  
✔️ Advanced Concepts (Hoisting, Closures, Event Loop, Memory Management)  
✔️ ES6+ Features (Modules, Destructuring, Spread/Rest, Optional Chaining)  
✔️ Performance Optimization & Best Practices

---

### **Repo Structure**

📁 **Chapter 1: JavaScript Basics**  
📁 **Chapter 2: Control Flow & Loops**  
📁 **Chapter 3: Functions & Closures**  
📁 **Chapter 4: Arrays & Objects**  
📁 **Chapter 5: DOM & Events**  
📁 **Chapter 6: Asynchronous JavaScript**  
📁 **Chapter 7: Object-Oriented JavaScript**  
📁 **Chapter 8: Advanced Concepts**  
📁 **Chapter 9: Real-World JavaScript**  
📁 **Chapter 10: Best Practices & Performance**

Each chapter contains:  
✅ **Concept Explanation**  
✅ **Code Examples**  
✅ **Exercises with Solutions**  
✅ **Interview Questions & Answers**

---

### **Who is this for?**

This guide is perfect for:  
🔹 Beginners who want a **structured** learning path.  
🔹 Developers looking to **deepen** their JS knowledge.  
🔹 Anyone preparing for **JavaScript interviews.**

---

### **How to Use This Repo?**

1️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/js-learning.git
cd js-learning
```

2️⃣ Start with **Chapter 1** and move forward.  
3️⃣ Practice exercises and solve interview questions.  
4️⃣ Experiment with code, break things, and debug.

---

### **Let’s Learn JavaScript!**

Contributions, suggestions, and improvements are welcome! Fork, clone, and start coding.

Happy Coding! 💻🎉

---

```js









//date format
const input = "1st Apr 2021"

// const year = input.slice(9);
// const month = input.slice(5,8);
// const day = input.slice(0,2);
// const output =`${year}-${month}-${day}`

// console.log(output);


const days = ['1st','2nd']
const months = ['Apr','May']
const years = [2021,2022]

const inputs = input.split(" "); // ["1st", "Apr", "2021"]

const year = inputs.find(p=>years.includes(parseInt(p)))
const month = inputs.find(p=>months.includes(p))
const day = inputs.find(p=>days.includes(p))

let _year;
for (let i = 0; i< inputs.length; i++){
    const p = parseInt(inputs[i]);
    for (let j = 0; j < years.length; j++){
        if(years[j] === p){
            _year = p;
            break;
        }
    }
}

console.log(`${year}-${month}-${day}`)
console.log(_year)

output
2021-Apr-1st
2021
```
