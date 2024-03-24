// Destructuring assignment

//Destructuring assignment
let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;
alert( name ); 
alert( age ); 
alert( isAdmin ); 

//The maximal salary
function topSalary(salaries) {
    let mxSalary = 0;
    let mxName = null;
    for(let [n, s] of Object.entries(salaries)) {
        if(s > mxSalary) {
            mxSalary = s;
            mxName = n;
        }
    }
    return mxName;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};