var sys = require('sys');
var fs = require('fs');

function most_common_words(input, x) {
    fs.readFile(input, function(err, data) {
        if (err) {
            return console.error(err);
        }
    });

    var j = 0;
    var k = 0;
    var arr = [];
    var hasil = [];
    var jumlahkata = 0;
    var data = fs.readFileSync(input) // Membaca data source.txt
    var text = data.toString().toLowerCase();

    text = text.replace(/\ the /g, " ").replace(/\'/g, " ").replace(/\=/g, " ").replace(/\[/g, " ").replace(/\]/g, " ").replace(/\./g, " ").replace(/{]/g, " ").replace(/}]/g, " ").replace(/\*/g, " ").replace(/\|/g, " ").replace(/\//g, " ").replace(/\\/g, " ").replace(/\"/g, " ").replace(/\</g, " ").replace(/\>/g, " ").replace(/\:/g, " ").replace(/\-/g, " ").replace(/\,/g, " ").replace(/\{/g, " ").replace(/\}/g, " ").replace(/\_/g, " ").replace(/\–/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\s+/g, " ").replace(/\d/g, " ").replace(/\&/g, " ").replace(/\;/g, " ").replace(/\ a /g, " ");


    arr = text.split(" ")
    while (j < arr.length) {
        var jumlahkata = 0;
        var kata = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[k] == arr[i] && arr[k] !== " ") {
                jumlahkata++
                kata = arr[i]
            }
        }
        hasil.push(jumlahkata+" !"+ " "+kata+": "+jumlahkata+" occurrences")
        j++
        k++
    }
    hasil = hasil.filter(function(elem, index, self){
      return index == self.indexOf(elem);
    })
    hasil.sort();
    var result = "\n"
    var row = "\n"
    for (var i = 0; i < x+1; i++) {
      result += hasil[hasil.length-i]+row
    }
    console.log("/*");
    console.log(result.replace(/\d{1,}\s!/g,""));
    console.log("/*");
}

most_common_words('source.txt',4)
