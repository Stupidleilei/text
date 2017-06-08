var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


var fsd = require("fs");

fsd.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data);
});

console.log("程序执行结束!");