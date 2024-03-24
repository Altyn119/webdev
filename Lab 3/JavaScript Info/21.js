//Map and Sets
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

//Filter anagrams
function aclean(arr) {
    let m = new Map();
    for (let i of arr) {
        let lower = i.toLowerCase().split('');
        let sorted = lower.sort();
        let ans = sorted.join('');
        m.set(ans, i);
    }    
    return Array.from(m.values());
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );

//Iterable keys
let m = new Map();
m.set("name", "John");
let keys = Array.from(m.keys());
keys.push("more");
alert(keys);

