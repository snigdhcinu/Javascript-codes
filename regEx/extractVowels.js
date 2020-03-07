// Extract all the vowels present in the given string.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
var i=0;
while(i<=result.length){
console.log(result[i]+' '+i);
i++;
}