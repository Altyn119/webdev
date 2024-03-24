// Functions

// Rewrite the function using '?' or '||'
function checkAge(age) {
    return (age>18) || confirm('Did parents allow you?');
}

//Function min(a, b)
function min(a, b){
    if(a > b){
        return b;
    }
    else return a;
}

//Function pow(x,n)
function pow(x, n){
    let ans = x;
    for(let i=0; i<n; i++){
        ans *= x;
    }
    return ans;
}

let n = 5, x = 3;

if(n < 1){
    alert('Number is too small');
}
else{
    alert(pow(x, n));
}