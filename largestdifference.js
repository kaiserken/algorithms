"use strict"

let largestDifference = function(data) {
  var temp = 0;
  for (var i = 0; i<data.length; i++){
    for (var j = i+1; j< data.length; j++){
      if (data[i]<=data[j]){
        if (j-i > temp){
          temp = j-i;
        }
      }
    }
  }
  return temp;
};


console.log(largestDifference([9,4,1,10,3,4,0,-1,-2]));
