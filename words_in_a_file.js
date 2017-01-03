// var sys = require('sys');
var fs = require('fs')
// actual conversion code starts here

function baca (text){
  var bacaan = fs.readFileSync(text, "utf8", (err, data) => {
  if (err) throw err;
  });
  return bacaan
}
function bersihkan(text){
  var texted = baca(text)
  texted = texted.replace(/[^A-z]+/gi, " ")
  texted = texted.replace(/\[|\]/gi, " ")
  texted = texted.split(" ").sort();
  var bersih = []
  for (var i = 0; i < texted.length; i++) {
    if (texted[i] != "" && texted[i].length > 1){
      bersih.push(texted[i])
    }
  }
  return bersih
}
function most_common_words(text, jumlah){
  var texted = bersihkan(text)
  var olah = []
  for (var i = 0; i < texted.length; i++){
    if (olah == []){
      olah.push(texted[i])
    } else if (texted[i] == texted[i-1]){
      olah[olah.length-1] = olah[olah.length-1] + "1" 
    } else if (texted[i] != texted[i-1]) {
      olah.push(texted[i])
    }
  }
  return olah
}
// function filter (){
//   data = data.split(" ")
//   var databaru = []
//   for (var i = 0; i < data.length; i++){
//     if ((/\w\w+/gi).test(data[i]) == true){
//       databaru.push(data[i])
//     }
//   }
//   console.log(data.length);
//   return databaru
// }

// console.log(filter());
console.log(most_common_words('source.txt', 3));
