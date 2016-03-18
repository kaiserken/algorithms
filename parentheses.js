'use strict'

function validParentheses(parens){
  let open  = parens.split('').filter(element => element === "(");
  let close  = parens.split('').filter(element => element === ")");
  if (open.length !== close.length || parens[0]!== "(" || parens[parens.length-1] !== ")" ){
    return false;
  }
  return true;
}

console.log(validParentheses( "())" ));

function validParentheses2(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
