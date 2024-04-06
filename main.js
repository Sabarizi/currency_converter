#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277,
    KWD: 0.31,
    SAR: 3.75,
    MYR: 4.74,
    TRY: 32.03,
    CAD: 1.36, //canadian dollar
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'KWD', 'SAR', 'MYR', 'TRY', 'CAD']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'KWD', 'SAR', 'MYR', 'TRY', 'CAD']
    },
    {
        name: 'amount',
        mmessage: 'Enter /your Amount',
        type: 'number',
    }
]);
// this is dynamic way to console 
let fromAmount = currency[userAnswer.from]; //exchange rate
let toAmount = currency[userAnswer.to]; //exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // uSD base currncy amount divi kringy
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
