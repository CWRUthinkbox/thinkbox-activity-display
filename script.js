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

dateAndTime();

function dateAndTime(){
	// Function to format 1 in 01
  const zeroFill = n => {
    return ('0' + n).slice(-2);
  }
    //Creates interval
    const interval = setInterval(() => {
    
    //Current time
    const now = new Date();

    //Format date 
    const dateTime = (now.getMonth() + 1) + '/' + zeroFill(now.getUTCDate()) + '/' + now.getFullYear() + ' ' +  ((now.getHours() + 11) % 12 + 1) + ':' + zeroFill(now.getMinutes());
   
    //Display the date and time 
    document.getElementById('date-time').innerHTML = dateTime;
  }, 1000);
}
}