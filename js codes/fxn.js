let num = [1, 2, 3, 4, 5, 6];

num.forEach((num) => {
  console.log(num * num);
});

//or
let nums = [1, 2, 3, 4, 5, 6];
let calSqu = (nums) => {
  console.log(nums * nums);
};

nums.forEach(calSqu);

//map

let number = [12, 13, 14, 15];

let newArr = number.map((val) => {
  return val * val;
});
console.log(newArr);

//filter
let numbers = [2, 3, 4, 6, 7, 8, 10, 12];

let evenArr = numbers.filter((val) => {
  return val % 2 === 0;
});
console.log();
//reduce return single value

let arrays = [1, 2, 3, 4, 5];

let initialValue = 0;
//0+1+2+3+4+5
let sumWithInitial = arrys.reduce(
  (result, currentValue) => result + currentValue,
  initialValue
);
console.log(sumWithInitial); //output =15

//code to sum

let arr1 = [1, 2, 3, 4];
let output = arr1.reduce((pre, curr) => {
  pre + curr;
});
console.log(output);

//code to find large

let arr2 = [3, 5, 7, 9, 4];
let largest = arr2.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
});
console.log(largest);

//topper

let marks = [23, 89, 90, 93, 95, 98];

let topper = marks.filter((val) => {
  return val > 90;
});
console.log(topper);

//print 1 to n

let n = prompt("enter the number");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i; //1(0),2(1),3(2)
}
console.log(arr);

let sum = arr.reduce((pre, curr) => {
  return pre + curr;
});
console.log("sum"=sum);

let productResult = arr.reduce((pre, curr) => {
  return pre * curr;
});
console.log("product"=productResult);
