// Let's make our own modules

function night(name) {
  console.log("Good night, " + name);
}

exports.night = night;
// console.log(exports);   // output: { night: [Function: night] }