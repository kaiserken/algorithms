function randomWord(str){
  if (str.length <=2){return str;}
  var newWord = "";
  var index = 1;
  var possibilities = Probability(str);
  newWord += random(possibilities, " ");

  while (newWord[index-1] !== " "){
    newWord += random(possibilities, newWord[index-1]);
    index ++;
  }
  console.log(newWord.substring(0, index-1));
  return newWord.substring(0, index-1);
}


function Probability(string){
  var str  = string.toLowerCase();
  var letters  = {};
  for (var i = 0; i<str.length; i++){
    var current = str.substring(i, i+1);
    var next  = str[i+1];
    if (i===0){
      letters[current]=[];
      letters[current].push(next);
      current = " ";
      next = str[i];
    }
    if (!str[i+1]){
      next=" ";
    }
    if (!letters.hasOwnProperty(current)) {
      letters[current] = [];
    }
    letters[current].push(next);
  }
  return letters;
}

function random(obj, key){
  var randomNum =  Math.floor(Math.random() * (obj[key].length - 0));
  return obj[key][randomNum];
}
