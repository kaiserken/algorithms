function pigIt(str){
  return str.split(" ").map(function(element){
    element  = element.slice(1) + element.slice(0,1) + "ay";
    return element;
  }).join(" ");
}

console.log(
pigIt('Pig latin is cool')
);
