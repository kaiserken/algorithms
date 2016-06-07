// fisher yates  - you can't just use random of whole deck all the time
var array  = [1,2,3,4,5];
function shuffleDeck(array){
  for (var i=0; i<array.length; i++){
    var card = Math.floor(Math.random() * (i+1));
    var temp = array[card];
    array[card] = array[i];
    array[i]= temp;
  }
  return array;
}

function shuffle (array) {
  var i = 0,
      j = 0,
      temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleDeck(array));
console.log(shuffle(array));
