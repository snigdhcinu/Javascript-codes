// .test() method is used to search for the regular expression in the string literal.
var string="Snigdh is a good boy";
var regEx=/Snigdh|snigdh|SNIGDH|sNiGdh|SnigDH/;// Similarly many more.
// A more effecient method of ignoring the case while testing is by using i-flag.
 var regEx_new=/snIgdH/i;
regEx.test(string);
regEx_new.test(string);
// So while we needed to include every case in regEx, in regEx_new, we need to only mention one of the cases, and we are good to go.