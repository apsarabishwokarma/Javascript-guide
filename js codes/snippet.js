// strings are immutable.

let str = "apsara";
console.log(str);
console.log(str.length);
console.log(str[0]);

//Template literals ``-backtick - we can embed the expression in strings

let specialString = `this is a special type of string `;
console.log(typeof specialString);

let product = {
  item: personalbar,
  price: 10,
  brand: paras,
};
console.log("the price of ", product.item, "is", product.price, "rupees");
//to combine string and variables we use template literals
//`string text ${expression} string text`
let output = `the price of ${product.item} is ${product.price} rupees`;
console.log(output);

//string interpolation:to create string by doing substitution of placeholder
`string text ${expression} string text`;
//escape characters :\n ,\t count as one single character

let str1 = "abc";
let result = str1.toUpperCase();
console.log(str1);
console.log(result);

let fullName = prompt("enter your full Name");
console.log("fullName");
let username = "@" + fullName + fullName.length;
console.log("username");
console.log(username.replaceAll("a", "b"));
