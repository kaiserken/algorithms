function a(n){
  var newstring = "";
  if (n<4) return "";
  if (n%2===1) n=n-1;
  var lineLength = 2*n;
  var midpoint  = n/2;

  for (var i = 0; i<=n; i++){
    var z = 0;
    while (z < lineLength){
      if (z < (n-i)){newstring+=" "; z+=1; continue;}
      if (z === n-i){newstring+="A"; z+=1; continue;}
      if (i === midpoint){
        if (z >n-i && z < n+i){
          var temp = 0;
          var temp1 = (n+i) - (n-i);
          while (temp < temp1){
          if (temp%2 === 0){newstring+=" "; temp +=1; z+=1; continue;}
          if (temp%2 === 1){newstring+="A"; temp +=1; z+=1; continue;}
          }
        }
      }

      if (z >n-i && z < n+i){newstring+=" "; z+=1; continue;}
      if (z === n+i){newstring+="A"; z+=1; continue;}
      if (z > (n+i)){newstring+=" "; z+=1; continue;}
    }

    newstring += "\n";
  }

  return (newstring.substring(0, newstring.length-(lineLength+2)));
}
