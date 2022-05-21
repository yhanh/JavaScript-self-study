const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
  { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
  { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
  { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
];

// some()

let someResult = languages.some((language) => {   // 只要條件符合，some() 會回傳true，否則 false
  return language.rating > 10.5;
});

console.log(someResult);   // output: false

// --------------------------------------------------------------------------------

// every()

let everyResult = languages.every((language) => {   // 若所有條件皆符合，every() 才會回傳 true，只要有一個條件不符，則回傳 false
    return language.rating > 2.4;
  });
  
  console.log(everyResult);   // output: true
