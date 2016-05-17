function randomWord(str){
  if (str.length === 1){return str;}
  var newWord = "";
  var newKey;
  var index = 1;
  var probabilities = Probability(str);
  newKey = startLetter(probabilities);
  newWord += newKey;
  while (newWord[index-1] !== " "){
    newKey = nextLetter(newWord[index-1],probabilities);
    newWord += newKey;
    index +=1;
  }
  console.log(newWord.substring(0, index-1));
  return newWord.substring(0, index-1);
}

// helper function to create the full set
function Probability(string){
  var str  = string.toLowerCase();
  var letters  = {};

  for (var i = 0; i<str.length-1; i++){
    var x = str[i];
    var y = str[i-1];
    if (string[i]===" "){continue;}
    if (i===0){
      letters[str[i]] = {};
      letters[str[i]][str[i+1]]=1;
      letters.start = {};
      letters.start[str[i]]=1;
    }else{
      if (!letters[str[i]]){
      letters[str[i]] = {};
      letters[str[i]][str[i+1]]=1;
      }else{
        if (!letters[str[i]][str[i+1]]){
          letters[str[i]][str[i+1]]=1;
        }else{
          letters[str[i]][str[i+1]]+=1;
        }
      }
      if (str[i-1]===" "){
        if (!letters.start[str[i]]){
          letters.start[str[i]] = 1;
        } else {
          letters.start[str[i]] += 1;
        }
      }
    }
  }
  if (!letters[str[str.length-1]]){
    letters[str[str.length-1]] = {};
    letters[str[str.length-1]][" "] = 1;
  }else{
    if (!letters[str[str.length-1]][" "]){
      letters[str[str.length-1]][" "] = 1;
    }else{
      letters[str[str.length-1]][" "] += 1;
    }
  }
  if (str[str.length-2]===" "){
    if (!letters.start[str[str.length-1]]){
      letters.start[str[str.length-1]] = 1;
    } else {
      letters.start[str[str.length-1]] += 1;
    }
  }
  return letters;
}

// helper function to generate a random number and then the new letter based on probabilty
function random(obj){
  var total=0;
  var total2 = 0;

  for (var keys in obj){
    total += obj[keys];
  }
  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
  }
  var randomNum = Math.floor(getRandomArbitrary(1, total+1));

  for (var keys2 in obj){
    total2 += obj[keys2];
    if (total2 >= randomNum){
      return keys2;
    }
  }
}
//start letter - self explanatory
function startLetter(obj){
  var startletter;
  for (var keys in obj){
    if (keys === "start"){
    newObject  = obj[keys];
    startletter = random(newObject);
    }
  }
  return startletter;
}

// next letter takes in previous letter (key) to determine probabilties of next letter
function nextLetter(key, obj){
  var nextletter;
  for (var keys in obj){
    if (keys === key){
    newObject  = obj[keys];
    nextletter = random(newObject);
    }
  }
  return nextletter;
}


randomWord("Hello World");
