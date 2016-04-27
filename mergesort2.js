function mergesort(array){
  if (array.length<2){
    return array;
  }
  var middle  = Math.floor(array.length/2);
  var left  = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right){
  var results  = [];

  while (left.length && right.length){
    if (left[0]<=right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while (left.length){
    results.push(left.shift());
  }
  while (right.length){
    results.push(right.shift());
  }
  return results;
}

console.log(mergesort([2,45,3,65,234,1,567,768,34]));
