"use strict"

// function findOdd(A) {
//   var  a = {};
//   A.map(function(number){
//     if (a.hasOwnProperty(number)){
//       delete a[number];
//     } else {
//       a[number] = number;
//     }
//   });
//   return parseInt(Object.keys(a)[0]);
// }
//
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

var A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function solution(A) {
  var number  = A.reduce(function(sum, element){
    return sum^element;
  },0);
  return number;

  // var sum = 0;
  // for (var i = 0; i<A.length; i++){
  //   sum  = sum^A[i];
  // }
  // return sum;
}

console.log(solution(A));
