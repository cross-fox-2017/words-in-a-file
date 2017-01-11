var fs = require('fs');

// actual conversion code starts here
fs.readFile('./source.txt','utf8',(err, data) => {
  if (err) throw err;
function most_common_words(array,val) {
  var array = array.replace(/[^a-z ]/ig,'');
  array = array.toLowerCase().split(' ')
  var counts = {};
  var allWords = [];
  var mostWord = [];
  for(var i = 0; i< array.length; i++) {
      var num = array[i];
      if (counts[num]) {
        counts[num] = counts[num]+1
      }
      else {
        counts[num] = 1
      }
  }
  for (var word in counts){
    allWords.push([word, counts[word]])
  }
  mostWord.sort(function(a,b){return b[1]-a[1]})
  for(let i=0; i<val; i++){
    mostWord.push(allWords[i])
  }
  return mostWord
}
console.log(most_common_words(data,3));
});
