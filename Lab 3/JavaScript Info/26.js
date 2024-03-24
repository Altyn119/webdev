// JSON methods, to JSON

//Turn the object into JSON and back
let user = {
    name: "John Smith",
    age: 35
};
let ans = JSON.parse(JSON.stringify(user));

//Exclude backreferences
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    if ( key != "" && value == meetup){
        return undefined;
    }
    else return value;
}));s
  