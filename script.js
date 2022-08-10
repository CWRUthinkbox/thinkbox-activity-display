function getDayStylesheet() {
  var currentDay = new Date().getDay(); //0 = Sunday
  console.log(currentDay);

  if (currentDay == 0) {
    document.write(
      "<link rel='stylesheet' href='day/sunday.css' type='text/css'>"
    );
  }
  if (currentDay == 1) {
    document.write(
      "<link rel='stylesheet' href='day/monday.css' type='text/css'>"
    );
  }
  if (currentDay == 2) {
    document.write(
      "<link rel='stylesheet' href='day/tuesday.css' type='text/css'>"
    );
  }
  if (currentDay == 3) {
    document.write(
      "<link rel='stylesheet' href='day/wednesday.css' type='text/css'>"
    );
  }
  if (currentDay == 4) {
    document.write(
      "<link rel='stylesheet' href='day/thursday.css' type='text/css'>"
    );
  }
  if (currentDay == 5) {
    document.write(
      "<link rel='stylesheet' href='day/friday.css' type='text/css'>"
    );
  }
  if (currentDay == 6) {
    document.write(
      "<link rel='stylesheet' href='day/saturday.css' type='text/css'>"
    );
  }
}

function showContent() {
  
  //Get URL params, expecting floor=x where x is 1-7
  // For example: "https://serious-confused-king.glitch.me/?floor=5" 
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);
  const floor = urlParams.get('floor');
  console.log(floor)
  
  //Select all elements with the appropriate class
  var content = document.querySelectorAll(".floor-"+floor);
  console.log(content);

  //Remove that class, so they are displayed
  for (var i = 0; i < content.length; i++) {
    content[i].classList.remove("floor-"+floor);
  }

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

timer();

function timer(){
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var sec = currentTime.getSeconds()
if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
var t_str = hours + ":" + minutes + ":" + sec + " ";

if(hours > 11){
    t_str += "PM";

  } else {
   t_str += "AM";
}
 document.getElementById('time_span').innerHTML = t_str;
 setTimeout(timer,1000);
}

/*
let day = dt.getDay();
let month = dt.getMonth();
let year = dt.getYear();

document.getElementById('day').innerHTML = day;
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = year;*/

}