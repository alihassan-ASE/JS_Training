// Ways to write string

//With single Quote (It is single line string)
let singleQuote = 'Using Single Quotes';
console.log(singleQuote);

// with double quotes (It is single line string also)
let doubleQuotes = "Using Double Quotes";
console.log(doubleQuotes);

// with backticks (Also know as template string and is used for multi-line string)
let backTicks = `This is 
multi-line
string`;
console.log(backTicks);

// String Interpolation (Insertion of variable in string)
const name = "Ali Hassan Mughal";
let age = 22;
let detail = `My name is ${name}, and my age is ${age}`;

console.log(detail);


// You can insert a quotation mark inside a string by preceding it with a backslash.

let quoteInString = "I am reading \"Example Book\" written by someone.";
console.log(quoteInString);

// Broken in Multiple lines but output will be in single line
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str);
