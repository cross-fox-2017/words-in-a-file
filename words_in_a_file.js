var fs = require('fs');

fs.readFile('source.txt','utf8', function(err,arr){

  let data = arr.replace(/[\n,\r]/g," ").trim().split(/\s+/g);

  //let data = data1.split(" ");

  var table ={};
  for(let i=0; i< data.length;i++){
var words = data[i];
table[words] === undefined ? table[words] = 1: table[words] += 1;

  }
  console.log(table);

});
