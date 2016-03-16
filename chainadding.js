function add(n){
  return function(b){
    return function(c){
      return n+b+c;
    };
  };
}

var currier  = function(fn){
  var args  = Array.prototype.slice.call(arguments, 1);
  return function(){
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments,0)));
  };
};

var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  console.log("parameters", parameters);
  return function() {
      console.log("uncurried", uncurried);
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var add = function(a,b,c) {
  console.log( a + b + c );
};
var addition = curryIt(add, 4, 6);
addition(2);




var one = currier(add, 1);
one(2);


var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Ken");

var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi");

var askHello = sayHello("?");
askHello("Heidi");
