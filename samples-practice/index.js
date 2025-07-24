const readline = require('readline-sync');

// var name = readline.question("What is your name?");
// console.log("Hi " + name + ", nice to meet you.");

// const LIMIT = 100;
// for(let i = 0; i < 100; i++) {
//     const number = Math.floor(Math.random() * LIMIT + 1);
//     console.log(`Number ${i + 1}: ${number}`);
// }

const LIMIT = 100;
const goalNumber = Math.floor(Math.random() * LIMIT + 1);
console.log("Guess a number between 1 and " + LIMIT + ".");
let guess = 0;

while (guess !== goalNumber) {
    guess = readline.questionInt("Your guess: ");
    if (guess < goalNumber) {
        console.log("Too low! Try again.");
    } else if (guess > goalNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the number " + goalNumber + ".");
    }
}
