//Strings

//Uppercase the first character
function ucFirst(s) {
    return s[0].toUpperCase() + s.slice(1);
}

alert( ucFirst("yuliya") ); 

//Check for spam
function checkSpam(s) {
    let ans = s.toLowerCase();
    if (ans.includes('viagra') || ans.includes('xxx')){
        return true;
    }
    else return false;
}

//Truncate the text
function truncate(s, maxlength) {
    if (s.length > maxlength){
        return s.slice(0, maxlength-1) + "...";
    }
    return s;
}

//Extract the money
function extractCurrencyValue(s) {
    return +s.slice(1);
}