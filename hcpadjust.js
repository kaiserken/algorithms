var hcpArray = [13,3,7,5,9,11,1,15,17,18,14,2,6,12,8,4,10,16];
var hcp  = -3;
function HCP(hcp, hcpArray){
  var scoreadj = [];
  scoradj = hcpArray.map(function(element){
    if (hcp === 0){
      scoreadj.push(0);
    }
    else if (hcp > 0){
      if(hcp-18 >= element){
        scoreadj.push(-2);
      }
      else if(hcp >= element){
        scoreadj.push(-1);
      }
      else {
        scoreadj.push(0);
      }
    }else{
      if (18-Math.abs(hcp) < element){
        scoreadj.push(1);
      }
      else{
        scoreadj.push(0);
      }
    }
  });
  return scoreadj;
}
console.log(hcpArray, HCP(hcp, hcpArray));
