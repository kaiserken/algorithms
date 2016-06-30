// "use strict" will throw error if variable is not declared using var (not defined) - prevents silly errors
// cannot delete variables, functions or arguments if use strict is used
// eval is safer to use with use strict - variables can't be defined in eval block

// strings numbers primitives are passed by value passes objects by reference

// differnce between dynamically typed and static typed  - values can be coerced from string to number etc.. just changed // during runtime - in Java for example - the type can't be changed during runtime

//only a programmer will set a value to null  - null is an actual value in javascript
// scopes global  - variables defined here are just being added as a property to window in browser or global in node etc..

// variable hoisting - hoists declaration of variable  - before assigning  - that is why you can undefined - same thing // // happens in a function - but hoisted in function scope
// This is determined by the calling context - if there isn't a calling context "this refers to the window" "use strict" can prevent errors of the 'this' keyword pointing to global object"

// bind only works with function expressions

var k = [1,2,3];
var j = [4,5,6];

function a(b){
    return (this.map(element => b * element));
}

console.log(a.call(k, 2));
console.log(a.call(j, 2));



function b(){
    var totals = [];
    for (var i = 0; i< arguments.length; i++ ){
      totals.push(arguments[i]*2);
    }
    return totals;
}

console.log(b.apply(null, k));
console.log(b.apply(null, j));

function c(){
    var args = [].slice.apply(arguments);
    return (args.map(element => 2 * element));
}
console.log(c.apply(null, k));
console.log(c.apply(null, j));
