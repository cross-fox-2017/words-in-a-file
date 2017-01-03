var sys = require('sys');
var fs = require('fs')
// actual conversion code starts here
var arrData = [];
fs.readFile('source.txt', "utf8", (err, data) => {
  if (err) throw err;
  data = data.split(" ")
  console.log(data);
});
