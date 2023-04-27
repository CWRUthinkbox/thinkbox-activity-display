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
    content[i].style.display = "block";
  }
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

function reloadIFrame(id) {
  console.log('Reloading'+id);
  document.getElementById(id).src += '';
}

function startIframeReload(id, intervalMs){
  window.setInterval(function() {
    reloadIFrame(id)
  }, intervalMs);
}
function runScripts(){
  showContent(); 
  startIframeReload('Activities', 300000); //5mins 
  setTimeout(startIframeReload('Visitors', 300000), 60000); //timeout for 1 min
  setTimeout(startIframeReload('Tours', 300000), 120000); //timeout for 2 mins
  
  /* TESTING FOOTER SPACE IN THIS FUNCTION */

  const baseId = 'appwKPlsDzMt9k08I';
  const tableName = 'tblbXSfPY3SXNojxM';
  const recordId = 'recCGR2qgkISoLUsV';
  const fieldName = 'FIRST NAME';
  const authToken = 'Bearer patxcEsm9mgqsmesB.b96a8335ec0b3d838bdfc3a564259d38926bcf49da068bc56856299fc0ff3c48';
  const footerSpace = document.querySelector('.footer-space')
  
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
  const headers = {
    'Authorization': authToken,
    'Content-Type': 'application/json'
  };
  
  fetch(url, {
    headers: headers
  })
    .then(response => response.json())
    .then(data => {
      const fieldValue = data.fields[fieldName];
      footerSpace.textContent = fieldValue;
    })
    .catch(error => console.error(error));

  /* END TESTING */

  //refresh whole page every hour
  window.setTimeout(function(){
    location.reload();
    }, 3600000);
}

