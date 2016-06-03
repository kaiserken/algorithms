input = [4,2,1,1,3]
// first number is length so it is shifted off

function processData(input) {
    input.shift();
    var dup  = input.slice();
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
      input.shift();
      dup = input.slice();
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
