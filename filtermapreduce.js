var scores  = [3,4,5,6,6,3,5,4,7,3,4,5,6,6,3,5,4,5];
var scoreadj = [0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1];

var stocks  = [
  { name : 'apple', mktCap : 600 , industry : 'Tech'},
  { name : 'ITW', mktCap : 200, industry : 'Manufacturing'},
  { name : "Kellogg", mktCap : 300, industry : 'Food'},
  { name : "Coors", mktCap : 100, industry : 'Beverage'},
  { name :"intel", mktCap : 300, industry : 'Tech'},
];

var totalScores = scores.reduce(function(sum, score){
  return sum + score;
},0);

var totalMktCap = stocks.reduce(function(sum, stock){
  return sum + stock.mktCap;
},0);

var techStocks = stocks.filter(function(stock){
  return stock.industry === "Tech";
}).map(function(stock){
  return stock.name + " is a " + stock.industry + " stock!";
});

var netScore  = scores.map(function(score, i){
  return score - scoreadj[i];
});


var Player1Net  = net(scores, scoreadj);
