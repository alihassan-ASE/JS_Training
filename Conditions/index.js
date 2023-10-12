//  If else conditons syntax

// Example 1
let num = 20;

if(num === 20){
  console.log('Hello i am 20 years old');
}
else if (num === 30){
  console.log('hello i am 30 years old');
}
else {
  console.log('Invalid');
}

// Example 2
let cheese = 'Chedder';

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

// Example 3
let shoppingDone = false;
let childsAllowance;

if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

// Example 4 (Nested Condition and Operators)
let day = 'Monday';
let Weather = 'Sunny';
let Temperature = '40Deg';


if(day === 'Monday'){
  if(Weather === 'Sunny' && Temperature === '40Deg'){
    console.log('Its hot today');
  }
  else {
    console.log('Its Raining');
  }

}


// Switch Statement
let number = 19;
switch(number){
  case 1:
    console.log('Number is 1');
    break;
  case 10:
    console.log('Number is 10');
    break;
  default:
    console.log('By default number is 40');
}


// Ternary Conditions

let isBirthday = true;
const greeting = isBirthday
  ? "Happy birthday Ali — we hope you have a great day!"
  : "Good morning Ali";

  console.log(greeting);


// Example 2
let data = 30;
let result = data === 2 ? 'Number 2': data === 20 ? 'number is 20': 'Number is Invalid';
console.log(result);