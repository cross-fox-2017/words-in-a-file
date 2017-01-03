// var sys = require('sys');
var fs = require('fs')
// actual conversion code starts here

//fungsi pembaca txt file
function baca (text){
  var bacaan = fs.readFileSync(text, "utf8", (err, data) => {
  if (err) throw err;
  });
  return bacaan
}

//membersihkan yang selain kata
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

 //memisahkan angka dan string plus bonus kata2 penutup
function getloop (katasatu){
  var angkanya = katasatu.length+2 - katasatu.indexOf(1);
  katasatu = katasatu.substring(0, katasatu.indexOf(1));
  return [angkanya, "Kali kemunculan kata :" , katasatu]
}

function most_common_words(text, jumlah){
  var texted = bersihkan(text)
  var olah = []
  for (var i = 0; i < texted.length; i++){
    if (olah == []){
      olah.push(texted[i])
      //kata hubung yang coba dihilangkan masukkan di if dibawah
    } else if (texted[i] == "a" || texted[i] == "the" || texted[i] == "of" || texted[i] == "ref" || texted[i] == "and" || texted[i] == "in" || texted[i] == "on"
    || texted[i] == "to" || texted[i] == "at" || texted[i] == "for"){
      // batas penghubung yang dibuang
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
  //digunakan saat paragraph panjang (untuk menghindari sort yang dianggap string)
  var reallysort = []
  for (var z = 0; z < sorted.length; z++){
    //masih harus diganti angka dibawah ini untuk mendapat sort yg bagus
    if (sorted[z][0] > 9){
      reallysort.push(sorted[z])
    }
  }
  hasil = reallysort.sort().reverse().splice(0, jumlah).join("\n")
  return hasil.replace(/,/g," ")
}


// console.log(most_common_words('source.txt', 3));
console.log(most_common_words('viggie.txt', 3));
console.log(most_common_words('cat.txt', 3));
console.log(most_common_words('hipster.txt', 3));
