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

console.log(missingNumbers);

// Example 