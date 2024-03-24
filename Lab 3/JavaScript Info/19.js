//Arrays

//Array operations.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let mid = Math.floor((styles.length - 1)/ 2);
styles[mid] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Raggae");

//Sum input numbers
function sumInput() {
    let arr= [];
    while (true) {
        let val = prompt("Enter number", 0);
        if (val === null || val === "" || !isFinite(val)) {
            break;
        }
        arr.push(+val);
    }
    let sum = 0;
    for( let i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
alert(sumInput());

//A maximal subarray
function getMaxSubSum(arr) {
    let mx= 0;
    for (let i=0; i<arr.length; i++) {
        let sum = 0;
        for (let j=i; j<arr.length; j++) {
            sum += arr[j];
            mx = Math.max(mx, sum);
        }
    }
    return mx;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); 
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
alert( getMaxSubSum([-2, -1, 1, 2]) ); 
alert( getMaxSubSum([1, 2, 3]) ); 
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 

