var sys = require('sys');
var fs = require('fs')
// actual conversion code starts here
fs.readFile('source.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
