var intervals = [
   [1,4],
   [7,10],
   [3,5],
   [4,8],
];

function sumIntervals(intervals){
  return Object.keys(intervals.reduce(function(hash, interval) {
    for(var i = interval[0]; i < interval[1]; i++) {
      hash[i] = 1;
    }
    return hash;
  }, {})).length;
}

console.log(sumIntervals(intervals));
