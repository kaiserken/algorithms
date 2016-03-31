 var results  = [ [ '+1','AS','+1','+2','+1','+2','+3','+2','+3','+4','+5','+6','+7','+6' ],[ '-','-','-','-',-1,'AS','+1','AS','+1','+2','+3','+4','+5','+4' ],[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+1', '+2', '+3', '+2' ],[ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+1', 'AS' ] ];

function NassauResults(results, bet){

  var bets  = results.map(function(element){
    if (element[element.length-1] === "AS" || element[element.length-1]=== "-" ){
      return 0;
    }
    if (parseInt(element[element.length-1]) < 0 ){
      return -bet;
    }
    if (parseInt(element[element.length-1]) > 0 ){
      return bet;
    }
  });
  var total  = bets.reduce(function(sum, bet){
    return sum + bet;
  }, 0);
  return total;
}
console.log(NassauResults(results, 2));
