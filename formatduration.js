"use strict";
//optimal solution
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
//brute force solution
function formatDuration (seconds) {
  var duration = {
    seconds: {
      one: "second",
      more: "seconds",
      value:1
    },
    minutes: {
      one: "minute",
      more: "minutes",
      value: 60,
    },
    hours:{
      one: "hour",
      more: "hours",
      value: 3600,
    },
    days:{
      one: "day",
      more: "days",
      value: 86400,
    },
    years: {
      one: "year",
      more: "years",
      value: 31536000,
    }
  };
  if (seconds === 0) {
    return "Now";
  }
  var carry  = 0;
  var value  = 0;
  var print  = "";

  if (seconds >= duration.years.value){
    value  = Math.floor(seconds/duration.years.value);
    if (value > 1){
      print += `${value} ${duration.years.more}`;
    } else {
      print += `${value} ${duration.years.one}`;
    }
  carry  = seconds - value*duration.years.value;
  seconds  = carry;
  carry  = 0;
  }
  if (seconds >= duration.days.value){
    if (print !== ""){print+=", ";}
    value  = Math.floor(seconds/duration.days.value);
    if (value > 1){
      print += `${value} ${duration.days.more}`;
    } else {
      print += `${value} ${duration.days.one}`;
    }
  carry  = seconds - value*duration.days.value;
  seconds  = carry;
  carry  = 0;
  }
  if (seconds >= duration.hours.value){
    if (print !== ""){print+=", ";}
    value  = Math.floor(seconds/duration.hours.value);
    if (value > 1){
      print += `${value} ${duration.hours.more}`;
    } else {
      print += `${value} ${duration.hours.one}`;
    }
  carry  = seconds - value*duration.hours.value;
  seconds  = carry;
  carry  = 0;
  }
  if (seconds >= duration.minutes.value){

    value  = Math.floor(seconds/duration.minutes.value);
    carry  = seconds - value*duration.minutes.value;
    if (print !== ""){
      if (carry ===0){
        print+=" and "
      } else {
        print+=", ";
      }
    }
    if (value > 1){
      print += `${value} ${duration.minutes.more}`;
    } else {
      print += `${value} ${duration.minutes.one}`;
    }
  seconds  = carry;
  carry  = 0;
  }
  if (seconds >= duration.seconds.value){
    value  = Math.floor(seconds/duration.seconds.value);
    if (value > 1){
      print += ` and ${value} ${duration.seconds.more}`;
    } else {
      print += ` and ${value} ${duration.seconds.one}`;
    }
  carry  = seconds - value*duration.seconds.value;
  seconds  = carry;
  carry  = 0;
  }
  return print;
}



console.log(formatDuration(3661));
