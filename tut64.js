const fs = require("fs");
const text = fs.readFileSync("readme.txt", "utf-8");
console.log("the content of the file is : " + text);
fs.writeFileSync("chinmay.txt", text);