var array = [1,"2",null,7,'four',[3,5,"8"],4,3,9];

function largest(array){
  var temp = -Infinity;
  for (var i = 0; i<array.length; i++){

   if (typeof array[i] === 'object' && array[i]!== null){
     if (largest(array[i])>=temp){
       temp = largest(array[i]);
     }
   } else {
     if (parseInt(array[i])>=temp){
       temp = parseInt(array[i]);
     }
   }
 }
 return temp;

}

console.log(largest(array));
