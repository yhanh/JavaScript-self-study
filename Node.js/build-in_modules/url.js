const url = require("url");

const cakeURL =
  "https://www.youtube.com/watch?v=f3E9KpPqMBQ&ab_channel=%EC%8B%9D%ED%83%81%EC%9D%BC%EA%B8%B0tablediary";

const parsedURL = url.parse(cakeURL, true);

console.log(parsedURL.host);   // output: www.youtube.com(這個有 port 這個網址看不出來)
console.log(parsedURL.hostname);   // output: www.youtube.com
console.log(parsedURL.pathname);   // output: /watch
console.log(parsedURL.path);   // output: /watch?v=f3E9KpPqMBQ&ab_channel=%EC%8B%9D%ED%83%81%EC%9D%BC%EA%B8%B0tablediary
console.log(parsedURL.query);
/* output: [Object: null prototype] {
    v: 'f3E9KpPqMBQ',
    ab_channel: '식탁일기tablediary'
} */
console.log(parsedURL.query.ab_channel);   // output: 식탁일기tablediary

