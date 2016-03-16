function mergeSort(array){
  if (array.length < 2) return array;

  var middle  = Math.floor(array.length/2);
  var left  = array.slice(0, middle);
  var right  = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var results  = [];

  while (left.length && right.length){
    if (left[0]<= right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while (left.length){
    results.push(left.shift());
  }
  while(right.length){
    results.push(right.shift());
  }
  return results;
}

mergeSort([2,45,3,65,234,1,567,768,34]);

