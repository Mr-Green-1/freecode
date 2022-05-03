
var a;
a = 7;
var b;
b = a;

var myFirstName = "alex";
var myLastName = "green";


var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;



var myDecimal = 5.7;
var myDecimal = 0.0003;

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;


firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

let myStr = "Jello World";

myStr = "Hello World";


function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelsCount++;
        break;
      default:
        break;
    }
  }

  return vowelsCount;
}





var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}



function removeChar(str) {
  return str.slice(1, str.length - 1);
};







function filter_list(l) {
  return l.filter(str => typeof str != 'string');
}




function makeNegative(num) {
  if (num > 0) {
    return -num
  }
  else if (num < 0) {
    return num
  }
  else {
    return 0
  }
}

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

console.log(wordBlanks);

function plural(n) {
  if (n == 1) return false;
  return true;
}

areYouPlayingBanjo = name => name + (name.match(/^r/i) ? " plays banjo" : " does not play banjo");

greet = hw => "hello world!";

function positiveSum(arr) {
  const reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0)
  return arr.reduce(reducer, 0)
}

basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

function stringToArray(string) {
  return string.split(' ')
}










