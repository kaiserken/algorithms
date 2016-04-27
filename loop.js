var array = [2,2,3];

function loop(array){
  var i = 0;
  var count = 0;
  while (array[i]>=0){
    i=array[array[i]];
    count+=1;
    if (count >= array.length){
      return "a loop exists";
    }
    console.log(count);
  }
  return "No loop exists";

}


console.log(loop(array));
