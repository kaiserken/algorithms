"use strict";

function dirReduc(arr){
  let directions = [];
  let directions2 = [];
  var count;
  while (arr.length){
    if ((arr[0] === "NORTH" && arr[1]==="SOUTH") || (arr[0] === "SOUTH" && arr[1]==="NORTH") ||(arr[0] === "EAST" && arr[1]==="WEST") || (arr[0] === "WEST" && arr[1]==="EAST")){
      arr.splice(0,2);
    } else {
      directions.push(arr.splice(0,1)[0]);
    }
  }
  while (directions.length){
    if ((directions[0] === "NORTH" && directions[1]==="SOUTH") || (directions[0] === "SOUTH" && directions[1]==="NORTH") ||(directions[0] === "EAST" && directions[1]==="WEST") || (directions[0] === "WEST" && directions[1]==="EAST")){
      directions.splice(0,2);
    } else {
      directions2.push(directions.splice(0,1)[0]);
    }
  }
  return directions2;
}

function dirReduc2(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

function dirReduc3(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
