function score( dice ) {
  var score  = 0;
  var countObj = {};
  for (var i = 0; i< dice.length; i++){
    if (countObj.hasOwnProperty(dice[i])){
      countObj[dice[i]]+=1;
    } else {
      countObj[dice[i]] = 1;
    }
  }
  if (countObj.hasOwnProperty("1")){
    if (countObj['1'] < 3){
      score += countObj['1']*100;
    } else {
      score += 1000 + (((countObj['1']-3)*100));
    }
  }
  if (countObj.hasOwnProperty("5")){
    if (countObj['5'] < 3){
      score += countObj['5']*50;
    } else {
      score += 500 + (((countObj['5']-3)*50));
    }
  }
  if (countObj.hasOwnProperty("2")){
    if (countObj['2'] > 2) score += 200;
  }
  if (countObj.hasOwnProperty("3")){
    if (countObj['3'] > 2) score += 300;
  }
  if (countObj.hasOwnProperty("4")){
    if (countObj['4'] > 2) score += 400;
  }
  if (countObj.hasOwnProperty("6")){
    if (countObj['6'] > 2) score += 600;
  }
  return score;
}




console.log(score( [2, 4, 4, 5, 4] ))
