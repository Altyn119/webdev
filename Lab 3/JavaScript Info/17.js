// Data Types. Numbers

//Sum numbers from the visitor
let a = +prompt("Enter first number", "");
let b = +prompt("Enter second number", "");
alert( a + b );

//Why 6.35.toFixed(1) == 6.3?
alert( Math.round(6.35 * 10)/10 );

//Repeat until the input is a number
function readNumber() {
    let n;
    do {
        n= prompt("Enter your number", 0);
    } while (!n );

    if (n == null || n == '') return null;
    return n;
}
  
alert(`Your number is: ${readNumber()}`);

//A random number from min to max
function random(min, max) {
    return Math.random() * (max - min) + min;
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//A random integer from min to max
function randomInt(min, max) {
    let ans = Math.random() * (max+1 -min) + min;
    return Math.floor(ans);
}
  
