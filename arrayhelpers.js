"use strict";

Array.prototype.square  = function(){

  return this.map(function(element){
    return element*element;
  });
};

Array.prototype.cube = function(){
  return this.map(function(element){
    return element*element*element;
  });
};

Array.prototype.sum = function(){
  return this.reduce(function(sum, element){
    return sum += element;
  }, 0);
};

Array.prototype.average = function(){
  return this.reduce(function(sum, element){
    return sum += element;
  }, 0)/this.length;
};

Array.prototype.even = function(){
  return this.filter(function(element){
    return element%2 ===0;
  });
};
Array.prototype.odd = function(){
  return this.filter(function(element){
    return element%2 ===1;
  });
};





let numbers  = [1,2,3,4,5];
console.log("square",numbers.square());
console.log("cube",numbers.cube());
console.log("sum",numbers.sum());
console.log("average",numbers.average());
console.log("even",numbers.even());
console.log("odd",numbers.odd());
