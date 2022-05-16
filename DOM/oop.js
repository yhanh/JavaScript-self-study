// An object can be a property of another object

let Hannah = {
  name: "Hannah Huang",
  talk() {
    console.log("Russell is my husband.");
  },
};

let Russell = {
  name: "Russell Martin",
  spouse: Hannah,
  walk() {
    console.log("I'm walking on the street.");
  },
};

// console.log(Russell.spouse);   // 結果是一個物件，叫做 Hannah 的物件

Russell.spouse.talk();   // output: Russell is my husband.
