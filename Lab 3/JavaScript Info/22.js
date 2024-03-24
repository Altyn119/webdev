// WeakMap and WeakSet

//Store "unread" flags
//WeakSet is used to store information about whether the message “has been read”? 
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let s = new WeakSet();
  
s.add(messages[0]);
s.add(messages[1]);
  
s.add(messages[0]);

alert("Read message 0: " + s.has(messages[0])); 
messages.shift();  //clean

//Store read dates
  
let m = new WeakMap();
m.set(messages[0], new Date(2023, 2, 11));

