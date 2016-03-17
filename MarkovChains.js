function nGrams(sentence, n) {
  // Split sentence up into words
  var words = sentence.split(/\W+/);
  // Total number of n-grams we will have
  var total = words.length - n;
  var grams = [];
  // Loop through and create all sequences
  for(var i = 0; i <= total; i++) {
    var seq = '';
    for (var j = i; j < i + n; j++) {
      seq += words[j] + ' ';
    }
    // Add to array
    grams.push(seq);
  }
  return grams;
}

nGrams("Hello world my name is ken", 2);
var ngrams = {};
var text = 'to be or not to be, that is the question';
var n = 2;
// Look at all characters of the String
for (var i = 0; i < text.length - n; i++) {
  // Look at an ngram
  var gram = text.substring(i, i + n);
  // Look at the next charaacter
  var next = text.charAt(i + n);
  // Is this a new one, make an empty array
  if (!ngrams.hasOwnProperty(gram)) {
    ngrams[gram] = [];
  }
  // Add the next character as a possible outcome
  ngrams[gram].push(next);
}

function randomWord(str){
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
  var startLetter  = [];
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
  console.log(letters);
  return letters;
}

function random(obj, key){
  var randomNum =  Math.floor(Math.random() * (obj[key].length - 0));
  console.log(randomNum, obj[key]);
  return obj[key][randomNum];
}
