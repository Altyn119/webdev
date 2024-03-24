// Array methods

//Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
    .split('-') 
    .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

//Filter range
function filterRange(arr, a, b) {
    return arr.filter(n => (a <= n && b >= n));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr ); 

//Filter range "in place"
function filterRangeInPlace(ar, a, b) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] < a || ar[i] > b) {
            ar.splice(i, 1);
            i--;
        }
    }
}
  
let ar = [5, 3, 8, 1]; 
filterRangeInPlace(arr, 1, 4); 
alert( arr ); 

//Sort in decreasing order
let a = [5, 2, 1, -10, 8];
a.sort((a, b) => b - a);
alert( a );

//Copy and sort array
function copySorted(arr) {
    return arr.slice().sort();
}
let array = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(array); 
alert( sorted );
alert( array );

//Create an extendable calculator
function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (isNaN(a) || isNaN(b) || !this.methods[op]) {
            return NaN;
        }
        else {
            return this.methods[op](a, b);
        }
    };
  
    this.addMethod= function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("**", (a, b) => a ** b);

//Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(val => val.name);

alert( names ); // John, Pete, Mary

//Sort users by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
  
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };
  
let arr1 = [ pete, john, mary ];
  
sortByAge(arr1);

alert(arr1[0].name); // John
alert(arr1[1].name); // Mary
alert(arr1[2].name); // Pete

//Shuffle an array
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

let arr2 = [1, 2, 3];
shuffle(arr2);
alert(arr2);

//Get average age
function getAverageAge(users) {
    let reducer = (prev, user) => prev + user.age;
    let sum = users.reduce(reducer, 0);
    return sum / users.length;
}
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 29 };
  
let arr3 = [ john, pete, mary ];
  
alert( getAverageAge(arr3) );

//Filter unique array members
function unique(arr) {
    let ans = [];
    for (let i=0; i<arr.length; i++) {
      if (!ans.includes(arr[i])) {
        ans.push(arr[i]);
      }
    }
    return ans;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); 
