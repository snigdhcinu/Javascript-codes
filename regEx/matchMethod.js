let string="This,this tHis thiS this This are all case sensitive tHIS";
let regEx=/this/gi;//g-flag for multiple this considering, i-flag for case-sensitivity.
let result=string.match(regEx);// returns an array if more than one match.