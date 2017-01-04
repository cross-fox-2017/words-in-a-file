var fs = require('fs');

fs.readFile('test.txt','utf8', function(err,arr){

  let data = arr.split("\r\n").join("");
  //let data = data1.split(" ");

  var table ={};
  for(let i=0; i< data.length;i++){
var words = data[i];
table[words] === undefined ? table[words] = 1: table[words] += 1;

  }
  console.log(table);

});
