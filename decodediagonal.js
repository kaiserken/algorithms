var grid = (
  "C \n" +
  "D o F C A E A s ! \n" +
  "G H d E L A r \n" +
  "L M N e P a F \n" +
  "X Z R P W"
  );
  // var grid = (
  // "B p E D y o q F q n C H v x K K D \n" +
  // "C r I y o w A n y F t B B q J C u B t z I A F I \n" +
  // "F H u s s y H I D n B \n" +
  // "L o J u F D F J A I s G s u o x E v \n" +
  // "L r x G J K y x o I E n w G H J M M z w F M r G \n" +
  // "K"
  // );
  // var grid = (
  // "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
  // "K p v r v z C y K M o p D y o y r n \n" +
  // "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r"
  // );

function getDiagonalCode(grid) {
  var newWord = "";
  var array  = grid.split("\n");
  var y = 0;
  if (array.length===1){return array[0];}

  for (var z=0; z<array.length; z++){
    array[z]=array[z].replace(/\s/g, '');
  }
  while (y<grid.length){
    for (var i=0; i<array.length; i++, y++){
      if (array[i][y]){
        newWord+=array[i][y];
      }else{
        return newWord;
      }
    }
    for (var x = array.length-2; x>=1; x--, y++){
      if(array[x][y]){
        newWord+=array[x][y];
      }else{
        return newWord;
      }
    }
  }
}

console.log(getDiagonalCode(grid));
