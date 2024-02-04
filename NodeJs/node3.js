// synchronous or blocking -> line by line execution
// asynchronous or non blocking -> line by line execution not guaranteed callbacks will fire

// const fs = require('fs');
// text = fs.readFileSync("read.txt", "utf-8");
// console.log("start reading...");
// console.log(text);

const fs = require('fs');
fs.readFile("read.txt", "utf-8", (err, txt) => {
    console.log(txt);
});
console.log("start reading...");