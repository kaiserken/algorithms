var MatchPlay  = require('./matchplay');

var p1 = [4,3,3,4,5,4,3,3,4,3,3,4,2,4,5];
var p2 = [1,1,3,4,4,3,4,3,3,4,4,3,3,6,4];


function Nassau(scores, team) {
  var totalbets = [];
  var frontbets = [];
  var backbets = [];
  var total = MatchPlay(scores, team, "nassau");
  totalbets.push(total[0]);

  function Bets(scores, total, team, totalbets){
    for (var i = 0; i<total[1].length; i++){
      var state = (total[1][i]);
      if (Math.abs(state) === 2){
        total = MatchPlay([scores[0].slice(i+1), scores[1].slice(i+1)], team, "nassau");
        totalbets.push(total[0]);
        scores  = [scores[0].slice(i+1), scores[1].slice(i+1)];
        return Bets(scores, total, team, totalbets);
      }
    }
    return;
  }
  Bets(scores, total, team, totalbets);
  return totalbets;
}

console.log(Nassau([p1,p2],[1,2,3,4], "nassau"));
