function Holes(startHole) {

  var  HolesArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  var frontArray  = HolesArray.slice(startHole-1, startHole+8);
  var backArray = HolesArray.slice(startHole+8, startHole+17);
  return [frontArray, backArray];

}

console.log(Holes(17));
