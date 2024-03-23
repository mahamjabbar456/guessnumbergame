#! /usr/bin/env node
import inquirer from "inquirer";
// Generate a random number of computer 
let computer = Math.floor(Math.random() * 100 + 1);
let num = await inquirer.prompt([{
        name: "GuessNumber",
        type: "number",
        message: "Enter a number between 1 and 100"
    }]);
if (computer < num.GuessNumber) {
    console.log(`You are enter ${num.GuessNumber}\n and computer enter ${computer}\n Congratulation you are won `);
}
else if (computer === num.GuessNumber) {
    console.log(`You are enter ${num.GuessNumber}\n and computer enter ${computer}\n The match is draw `);
}
else {
    console.log(`You are enter ${num.GuessNumber}\n and computer enter ${computer}\n you are loss `);
}
