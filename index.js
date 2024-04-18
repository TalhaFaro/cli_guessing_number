#! /usr/bin/env node
import inquirer from "inquirer";
//1. computer will generate a random number
//2. user guess a number
//3. compare both number and then show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Choose one random number between 1 - 10:"
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation you guess a correct number");
}
else {
    console.log("OHHH! you are wrong");
}
;
console.log(`Correct answer is: ${randomNumber}`);
