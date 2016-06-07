input = "4\n2\n1\n1\n3\n"

// first number is length so it is shifted off

function processData(input) {
  var inputArray = input.split("\n");
  console.log(inputArray);
    inputArray.pop();
    inputArray.shift();
    var dup  = inputArray.slice();
    var history = {};
    function help(array){
      return array.reduce(function(sum, element){
        return sum^element;
      },0);
    }
    function memo(copy){
      while (copy.length > 1){
        var temp = help(copy);
        if(!history[temp]){
          history[temp] = 1;
        } else {
          history[temp]+=1;
        }
        copy.pop();
      }
      history[copy[0]]+=1;
      return;
    }
    while (dup.length){
      memo(dup);
      inputArray.shift();
      dup = inputArray.slice();
    }
    var max = 0;
    var keyval = null;
    for (var key in history){
      if (keyval === null){
        keyval = parseInt(key);
        max = history[key];
      }
      if (history[key]>max){
        max = history[key]; keyval = parseInt(key);
      }
      if (history[key]>=max && parseInt(key)< keyval){
        max = history[key]; keyval = parseInt(key);
      }
    }
    return (keyval + " " + max);

}

console.log(processData(input));
