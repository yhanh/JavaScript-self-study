let lang = ["Java", "C++", "Python", "JS"];

let upperLang = lang.map(function (i) {
  return i.toUpperCase();
});

console.log(upperLang);
// output: (4) ['JAVA', 'C++', 'PYTHON', 'JS']


const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
  { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
  { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
  { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
];

let newLanguages = languages.map((lang) => {
  return lang.trending.toUpperCase();
});

console.log(newLanguages);
// output: (5) ['SUPER HOT', 'SAME', 'SAME', 'DECREASING', 'SAME']
