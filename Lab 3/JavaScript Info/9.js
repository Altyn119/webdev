//Loops. For/ While

// What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert( i-- );
}
    //answer: 1
    //Explanation:
    //1 itteration: i=3 -> i=2
    //2 itteration: i=2 -> i=1
    //3 itteration: i=1 -> i=0. After that While loop stops to work


// Which values does the while loop show?

    //1. 
    let it = 0;
    while (++it < 5) alert( it ) //output: 1 2 3 4
    //2.
    let j = 0;
    while (j++ < 5) alert( j );  //output:1 2 3 4 5

//Output even numbers in the loop
for (let i=2; i<=10; i++) {
    if (i%2 == 0) {
      alert(i);
    }
}

//Replace "for" with "while"
let k = 0;
while (k < 3) {
  alert( `number ${k}!` );
  k++;
}

//Repeat until the input is correct
let n;
do {
  n = prompt("Enter a number greater than 100?", 0);
} 
while (n <= 100 && n!= null);

//Output prime numbers
let m = 10;
for (let i=2; i<=m; i++) { 
    for (let j = 2; j<i; j++) { 
        if (i%j == 0) continue;
    }
    alert(i); 
}



