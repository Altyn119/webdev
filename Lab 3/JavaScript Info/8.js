//Logical Operators

//Check the range between
let ans = false;
if (age >= 14 && age <= 90){
    ans = true
}

// Check the range outside

    //using NOT (!)
    if (!(age >= 14 && age <= 90)){
        ans = true;
    }
    //without NOT (!)
    if (age < 14 || age > 90){
        ans = true;
    }

// A question about 'if'
if (-1 || 0) alert( 'first' );          //result - first
if (-1 && 0) alert( 'second' );         //result - error
if (null || -1 && 1) alert( 'third' );  //result - third


// Check the login
let user = prompt("Who's there?", '');
let enter;
if (user === "Admin") {
    enter= prompt("Password?", '');
    if (enter === "TheMaster") {
        alert("Welcome!");
    } 
    else if (enter === '' || enter === null) {
        alert("Canceled");
    } 
    else if(enter !== "TheMaster"){
        alert("Wrong password");
    }
} 
else if (user === '' || user === null) {
  alert("Canceled");
} 
else {
  alert("I don't know you");
}
 

