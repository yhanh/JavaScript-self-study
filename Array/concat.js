// concat()

let friends1 = ["Karla", "Russell", "Maegan"];
let friends2 = ["Sam", "Trace", "Nathan"];

let friends = friends1 + friends2;
console.log(friends); // output: Karla,Russell,MaeganSam,Trace,Nathan
console.log(typeof friends); // output: string

let combineFriends = friends1.concat(friends2);
console.log(combineFriends);   // output: (6) ['Karla', 'Russell', 'Maegan', 'Sam', 'Trace', 'Nathan']