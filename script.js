function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function showContent() {
  
  //Get URL params, expecting floor=x where x is 1-7
  // For example: "https://serious-confused-king.glitch.me/?floor=5" 
  var floor = getParameterByName('floor')
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
  setTimeout(startIframeReload('Flyers', 300000), 180000);

  //refresh whole page every hour
  window.setTimeout(function(){
    location.reload();
    }, 3600000);
}

