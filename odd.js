"use strict"

function findOdd(A) {
  var  a = {};
  A.map(function(number){
    if (a.hasOwnProperty(number)){
      delete a[number];
    } else {
      a[number] = number;
    }
  });
  return parseInt(Object.keys(a)[0]);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
