"use strict";

var scores  =   [3,4,4,6,3,3,4,4,7,3,3,5,6,6,3,5,4,5];
var scores1  =  [4,4,4,6,6,3,5,3,5,3,4,5,6,5,3,5,4,4];
var scores2  =  [6,3,5,5,6,3,5,4,7,3,4,2,4,6,3,6,4,5];

function nines(arr1, arr2, arr3){
  var result1 = [];
  var result2 = [];
  var result3 = [];

  for (var i  = 0; i< arr1.length; i++){
    if (arr1[i] === arr2[i]){
      if (arr2[i] === arr3[i]){
        result1.push(3); result2.push(3); result3.push(3); continue;
      }
      if (arr2[i]< arr3[i]){
        result1.push(4); result2.push(4); result3.push(1); continue;
      }
    result1.push(2); result2.push(2); result3.push(5); continue;
    }
    if (arr2[i] === arr3[i]){
      if (arr2[i]< arr1[i]){
        result1.push(1); result2.push(4); result3.push(4); continue;
      }
    result1.push(5); result2.push(2); result3.push(2); continue;
    }
    if (arr1[i] === arr3[i]){
      if (arr1[i]< arr2[i]){
        result1.push(4); result2.push(1); result3.push(4); continue;
      }
    result1.push(2); result2.push(5); result3.push(2); continue;
    }
    if (arr1[i] < arr2[i] && arr2[i] < arr3[i]){
      result1.push(5); result2.push(3); result3.push(1); continue;
    }
    if (arr1[i] < arr3[i] && arr3[i] < arr2[i]){
      result1.push(5); result2.push(1); result3.push(3); continue;
    }
    if (arr2[i] < arr1[i] && arr1[i] < arr3[i]){
      result1.push(3); result2.push(5); result3.push(1); continue;
    }
    if (arr2[i] < arr3[i] && arr3[i] < arr1[i]){
      result1.push(1); result2.push(5); result3.push(3); continue;
    }
    if (arr3[i] < arr1[i] && arr1[i] < arr2[i]){
      result1.push(3); result2.push(1); result3.push(5); continue;
    }
    if (arr3[i] < arr2[i] && arr2[i] < arr1[i]){
      result1.push(1); result2.push(3); result3.push(5); continue;
    }
  }
  console.log("result1", result1, "result2", result2, "result3" , result3);
}

console.log(nines(scores, scores1, scores2));
