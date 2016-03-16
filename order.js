function order(words){
  var wordArray = [];
  newWordArray = [];
  var numbers = words.replace(/\D/g, "");
  newstring = "";
  wordArray  = words.split(' ');
  for (var i = 0; i<numbers.length;i++){
    newWordArray[numbers[i]]= wordArray[i];
  }
  return newWordArray.join().replace(/\,/g, " ").substring(1);
}

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}