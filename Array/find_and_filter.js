const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
    { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
    { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
    { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
];
// find()

let FindResult = languages.find((language) => {
  // find 只會回傳第一個符合條件的 object
  return language.rating > 7.5;
});

console.log(FindResult);
// output: {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'}

// ------------------------------------------------------------------------------------------

// filter()
let FilterResult = languages.filter((language) => {
  // filter 會回傳所有符合條件的 object
  return language.rating > 7.5;
});

console.log(FilterResult);
/* (3) [{…}, {…}, {…}]
0: {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'}
1: {name: 'Java', rating: 8.6, popularity: 8.2, trending: 'same'}
2: {name: 'JavaScript', rating: 8.5, popularity: 8.1, trending: 'same'}
length: 3
[[Prototype]]: Array(0)
*/
