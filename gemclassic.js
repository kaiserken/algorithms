var S = "13 DUP 4 POP 5 DUP + DUP + -"

function solution(S) {
  var args  = S.split(" ");
  var stack  = [];
  for (var i =0; i< args.length; i++){
    console.log(args);
    if (parseInt(args[i]) >= 0){
      console.log(parseInt(args[i]));
      stack.push(parseInt(args[i]));
    }
    if (args[i]==="DUP"){
      stack.push(stack[stack.length-1]);
    }
    if (args[i]==="POP"){
      stack.pop();
    }
    if (args[i] === "+"){
      stack.push(stack.pop() + stack.pop());
    }
    if (args[i]==='-'){
      var z = stack.pop();
      stack.push(z - stack.pop());
    }
    console.log('stack', stack);
  }
  return stack.toString().replace(',', ' ');
}

console.log(solution(S));
