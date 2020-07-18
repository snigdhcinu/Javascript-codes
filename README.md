# Javascript-codes
#How to read from stdin

// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// // your code goes here


var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let input;
rl.on('line', function(line){     // async method to get and store stdio.
    input=line;
    console.log(input);
    process.stdout.write(input);    // similar to cout/stdout.
})
