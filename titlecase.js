"use strict";

function titleCase(title, minorWords) {
  let m;
  if (!minorWords){
    m = [" "]
  } else {
    m  = minorWords.toLowerCase().split(" ");
  }
  let t  = title.toLowerCase().split(" ");
  let cfl = string => string.charAt(0).toUpperCase() + string.slice(1);
  t[0] = cfl(t[0]);
  for ( var i = 1; i < t.length; i++){
    var count  = null;
    for (var x = 0; x< m.length; x++){
      if (t[i]===m[x]){
        count +=1;
      }
    }
    if (count) {
      continue;
    } else {
      t[i] = cfl(t[i]);
    }
  }
  return t.join(' ');
}

function titleCase2(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  console.log(minorWords);
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

console.log("titleCase",
titleCase('the quick brown fox', 'the')
);
console.log("titleCase2",
titleCase2('the quick brown fox')
);
