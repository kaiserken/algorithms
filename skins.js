var p1 = [4,3,4,4,3,4,4,3,4,4,3,4];
var p2 = [2,3,1,2,5,1,2,1,3,2,5,7];
var p3 = [1,3,1,5,5,1,8,1,3,2,1,7];
var p4 = [1,2,1,3,5,5,8,6,3,2,2,3];
// takes an array arr of player score arrays between 2-4 returns an array of arrays
function Skins(arr, bet, carry) {
  var carrybets = 0,
  results1 = [],
  results2 = [],
  results3 = [],
  results4 = [];

  if (arr.length === 2){
    for (var i = 0; i<arr[0].length; i++){
      if (arr[0][i]===arr[1][i]){
        if (carry === true){
          results1.push(0); results2.push(0); carrybets += bet; continue;
        } else {
          results1.push(0); results2.push(0); continue;
        }
      }
      if (arr[0][i]<arr[1][i]){
        results1.push(bet+carrybets);
        carrybets = 0;
        results2.push(0);
      }
      if (arr[0][i] > arr[1][i]){
        results2.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
      }
    }
    return [results1, results2];
  }

  if(arr.length === 3){
    for (var i  = 0; i< arr[0].length; i++){
      var temp  = [arr[0][i], arr[1][i], arr[2][i]];
      var min  = temp.indexOf(Math.min(arr[0][i], arr[1][i], arr[2][i]));

      if (min===0){
        if (arr[0][i]===arr[1][i] || arr[0][i] === arr[2][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); continue;
          }
        }
        results1.push(bet+carrybets);
        carrybets = 0;
        results2.push(0);
        results3.push(0);
        continue;
      }

      if (min===1){
        if (arr[1][i]===arr[0][i] || arr[1][i] === arr[2][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); continue;
          }
        }
        results2.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
        results3.push(0);
        continue;
      }

      if (min===2){
        if (arr[2][i]===arr[0][i] || arr[2][i] === arr[1][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); continue;
          }
        }
        results3.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
        results2.push(0);
        continue;
      }
    }
    return [results1, results2, results3];
  }

  if(arr.length === 4){
    for (var i  = 0; i< arr[0].length; i++){
      var temp  = [arr[0][i], arr[1][i], arr[2][i], arr[3][i]];
      var min  = temp.indexOf(Math.min(arr[0][i], arr[1][i], arr[2][i], arr[3][i]));

      if (min===0){
        if (arr[0][i]===arr[1][i] || arr[0][i] === arr[2][i] || arr[0][i] === arr[3][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); results4.push(0);  carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); results4.push(0); continue;
          }
        }
        results1.push(bet+carrybets);
        carrybets = 0;
        results2.push(0);
        results3.push(0);
        results4.push(0);
        continue;
      }

      if (min===1){
        if (arr[1][i]===arr[0][i] || arr[1][i] === arr[2][i] || arr[1][i] === arr[3][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); results4.push(0);  carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); results4.push(0); continue;
          }
        }
        results2.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
        results3.push(0);
        results4.push(0);
        continue;
      }

      if (min===2){
        if (arr[2][i]===arr[0][i] || arr[2][i] === arr[1][i] || arr[2][i] === arr[3][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); results4.push(0);  carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); results4.push(0); continue;
          }
        }
        results3.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
        results2.push(0);
        results4.push(0);
        continue;
      }

      if (min===3){
        if (arr[3][i]===arr[0][i] || arr[3][i] === arr[1][i] || arr[3][i] === arr[2][i]){
          if (carry === true){
            results1.push(0); results2.push(0); results3.push(0); results4.push(0);  carrybets += bet; continue;
          }else{
            results1.push(0); results2.push(0); results3.push(0); results4.push(0); continue;
          }
        }
        results4.push(bet+carrybets);
        carrybets = 0;
        results1.push(0);
        results2.push(0);
        results3.push(0);
        continue;
      }
    }
    return [results1, results2, results3, results4];
  }
}

console.log(Skins([p1, p2, p3, p4], 1, true));
