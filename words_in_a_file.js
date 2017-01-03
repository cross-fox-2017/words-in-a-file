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

function getloop (katasatu){
  var angkanya = katasatu.length+2 - katasatu.indexOf(1);
  katasatu = katasatu.substring(0, katasatu.indexOf(1));
  return [angkanya, "Kali kemunculan kata" , katasatu]
}

function sorting(myWord){
  var temp = ""
  for (var i = 0; i < myWord.length; i++) {
    for (var j = 0; j < myWord[i].length; j++) {
      if (myWord[i] < myWord[j]){
        temp = myWord[j]
        myWord[j] = myWord[i]
        myWord[i] = temp
      }
    }
  }
  return myWord
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
  var sorted = [];
  for (var i = 0; i < olah.length; i++) {
    if (olah[i].indexOf(1) != -1){
      sorted.push(olah[i])
    }
  }
  for (var k = 0; k < sorted.length; k++){
    sorted[k] = getloop(sorted[k])
  }
  var reallysort = []
  for (var z = 0; z < sorted.length; z++){
    if (sorted[z][0] > 100){
      reallysort.push(sorted[z])
    }
  }
  hasil = reallysort.sort().reverse().splice(0, jumlah).join("\n")
  return hasil.replace(/,/g," ")
}


console.log(most_common_words('source.txt', 3));
