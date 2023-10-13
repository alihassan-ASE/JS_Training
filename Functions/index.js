// Functions 

// Simple Functions (Using for loop)
function findMissingNumber(arr){
    let missingNumbers = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i+1] !== arr[i]+1){
            for(let j=arr[i]+1; j<arr[i+1]; j++){
                missingNumbers.push(j);
            }
        }
    }
    return missingNumbers;
}
let arr = [1,3,7,8,10];
console.log(findMissingNumber(arr));

// Same example in Function expression (Just a little bit of syntax change)
let findMissNumber = function (array){
    let missingNumbers = [];
    for (let i=0; i<array.length; i++){
        if(array[i+1] !== array[i]+1){
            for(let j=array[i]+1; j<array[i+1]; j++){
                missingNumbers.push(j);
            }
        }
    }
    return missingNumbers;
}
let array = [3,6,8,10];
console.log(findMissNumber(array));


// Arrow Functions
let arrowFunction = (length) => {
    let series = [0,1];
    for (let i=2; i<length; i++){
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}
console.log(arrowFunction(10));

// Nested Function
const playerName = "Ali Hassan";
function getScore() {
    const num1 = 2;
    const num2 = 3;
  
    function add() {
      return `${playerName} scored ${num1 + num2}`;
    }
  
    return add();
  }
console.log(getScore());

// Callback function

function greetings(name, callback){
    console.log("Hi,", name, callback());
    

}
function callback() {
    return 'Nice to Meet you!';
}
greetings('Ali Hassan', callback);

// Recursive Function

function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

// Closure Scope conflicts

function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // 20 (instead of 10)


// Rest operator in function
function multiply(multiplier, ...theArgs) { //rest operator 
    return theArgs.map((x) => multiplier * x);
}
const args = multiply(2, 1, 2, 3);
console.log(args); // [2, 4, 6]