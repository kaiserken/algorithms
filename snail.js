var array = [
            [1,2,3,4,5,6],
            [20,21,22,23,24,7],
            [19,32,33,34,25,8],
            [18,31,36,35,26,9],
            [17,30,29,28,27,10],
            [16,15,14,13,12,11],
          //  [1]
            ];


function snail(array) {
  var newArr  = array.slice();
  var length = newArr.length;
  if (length === 1){return(array[0]);}
  var solution = [];
  solution.push(newArr[0]);
  for (var i = 1; i<length-1; i++){
    solution.push(newArr[i][length-1]);
    newArr[i].pop();
  }
  solution.push(newArr[length-1].reverse());
  for (var i = length-2; i>0; i--){
    solution.push(newArr[i][0]);
    newArr[i].shift();
  }
  newArr.pop();
  newArr.shift();
  // use recursion to handle unlimited size of n*n grid;
  if(newArr.length){
    solution.push(snail(newArr));
  }

  var merged = [].concat.apply([], solution);

  return merged;

}



console.log(snail(array));
