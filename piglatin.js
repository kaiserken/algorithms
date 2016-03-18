function pigIt(str){
  return str.split(" ").map(function(element){
    var end = element.slice(0,1);
    var start = element.slice(1, element.length);
    element  = start + end + "ay";
    return element;
  }).join(" ");
}

console.log(
pigIt('Pig latin is cool')
);
