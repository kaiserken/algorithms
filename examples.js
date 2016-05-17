

// function a(){
//   function b(){
//     console.log(myVar);
//
//   }
//
//   myVar = 2;
//   b();
// }
//
// var myVar = 1;
//
// console.log("a", a());
// console.log( "myvar", myVar);

// function waitThreeSeconds(){
//   var ms  = 3000 + new Date().getTime();
//   while (new Date()< ms){}
//   console.log("finished function");
//   return new Date().getTime();
// }

// console.log(waitThreeSeconds());

// var a = "3"+4;
// console.log(a);
//operators are functions
//precedence  = which one is called first - higher precedence called first
// operator associativity - left to right or right to left  - comes into play when operators have same precedence
// coercion  = converting a value from one type to another

// function greet(whattosay){
//   return function(name){
//     console.log(whattosay + ' ' + name);
//   };
// }
// var sayhi  = greet('Hi');
//
// sayhi('Ken');

// function buildFunctions(){
//   var arr = [];
//   for (var i = 0; i<3; i++){
//     arr.push(
//       (function(j){
//           return function(){
//             console.log(j);
//           };
//       }
//     )(i));
//   }
//   return arr;
// }
// var fs  = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();


// var person  = {
//   firstname: 'John',
//   lastname: 'Doe',
//   getFullName : function(){
//     var fullName  = this.firstname + " " + this.lastname;
//     return fullName;
//   }
// };
//
// var logName  = function(lang1, lang2){
//   console.log('logged '+ this.getFullName());
// }.bind(person);
//
// var logPersonname  = logName.bind(person);
//
// console.log(logName());

// function multiply(a,b){
//   return a * b;
// }
//
// var multiplyByTwo  = multiply.bind(this, 2);
//
// console.log(multiplyByTwo(12));

var arr1 = [1,2,3];
console.log(arr1);

function mapForEach(arr, fn){
  var newArr = [];
  for (var i = 0; i< arr.length; i++){
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr;
}

var arr2 = mapForEach(arr1, function(item){
  return item * 2;
});

console.log(arr2);

var checkPastLimit = function(limiter, item){
  return item > limiter;
};

var checkPastLimit2 = function(limiter){
  return function(limiter, item){
    return item > limiter;
  }.bind(this, limiter);
};

var arr3 = arr1.map(checkPastLimit.bind(this, 0));
var arr4  = arr1.map(checkPastLimit2(1));


console.log(arr3);
console.log(arr4);
