var array  = [2,45,3,65,234,1,567,768,34];
(array.sort(function(a,b){
  return a-b;
})).map(function(number){
   return number *-2;
});

