// Basic operators, math

//postfix, prefix
let a=1, b=1;
let c = ++a //answer = 2
let d = ++b// answer = 2

//Asignment result
let f = 2;
let x = 1+(f *=2);  //f = 4; x=5

//Type convertions
"" + 1 + 0  //10
"" - 1 + 0   //-1
true + false  //1
6 / "3"      //2
"2" * "3"    //6
4 + 5 + "px"  //"9px"
"$" + 4 + 5   //$45
"4" - 2      //2
"4px" - 2    //NaN
"  -9  " + 5   //"  -9  5"
"  -9  " - 5   // -14
null + 1      //1
undefined + 1    //NaN
" \t \n" - 2    //-2

//Fix the ddition
let aa = "1";
let bb = "2";
alert(a+b)
