//Objects

// Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum);

//Multiply numeric property values by 2

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
  
  // after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};


