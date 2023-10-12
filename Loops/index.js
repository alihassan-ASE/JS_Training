// For Loop

// Example 1
for (let stepsCount = 0; stepsCount < 10; stepsCount++){
    console.log(`Steps ${stepsCount}`);
}


// Example 2 find missing numbers

let arr = [1, 2, 3, 5, 8, 10];
let missingNumbers = [];

for (let i = 0; i < arr.length - 1; i++) {
  while (arr[i] + 1 !== arr[i + 1]) {
    arr[i]++;
    missingNumbers.push(arr[i]);
  }
}

console.log('Missing Numbers are '+ missingNumbers);

// Example 3 (Find Factorial)
let number = 4;
for (let i=number-1; i>1; i--){
    number = number*i;
}
console.log('Factorial of given Number is ' + number);




// While Loop 
// Example 1(Find Length of String)
let str = 'Ali Hassan';
let length = 0;
while(str[length]){
    length++;
}
console.log('The length of Given string is '+ length);


// Example 2 (Find Sum of number to n)
let results = 0;
let n = 1;
while (n<=5){
    results += n;
    n++;
}
console.log(results);

// Example 3 (Palindrome Check)
