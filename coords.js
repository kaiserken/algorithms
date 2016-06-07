var coordinates  = "-89.53525235, -23.45235";
// codewars challenge


function isValidCoordinates(coordinates){
  var pair = coordinates.split(",");
  if(isNaN(pair[0]) || isNaN(pair[1]) || pair.length !=2){
    return false;
  }
  if(pair[0].match(/[a-zA-Z]/)!==null || pair[1].match(/[a-zA-Z]/)!==null){
    return false;
  }
  var latitude = parseFloat(pair[0]);
  var longtitude = parseFloat(pair[1]);
  if(latitude<-90 || latitude>90 || longtitude <-180 || longtitude > 180){
    return false;
  }
  return true;

}



console.log(isValidCoordinates(coordinates));
