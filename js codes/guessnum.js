let gameNum = 25;
let userNum = prompt("Guess the number");
while (userNum != gameNum) {
  userNum = prompt("You entered the wrong number guess again:");
}
console.log("congratulations, you entered the right number");
