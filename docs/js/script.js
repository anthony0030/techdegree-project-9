const alertContainer = document.getElementById("alerts");
const sendMessageButton = document.getElementById("sendMsg");

// Close Button
const closeButton = document.createElement("SPAN");
const closeButtonText = document.createTextNode(String.fromCharCode(215));
closeButton.classList.add("closebtn");
closeButton.appendChild(closeButtonText);

// Event listener to remove the alerts when the closebutton is pressed
alertContainer.addEventListener("click", function(event){
  if(event.target.className === "closebtn"){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  }
});



sendMessageButton.addEventListener("click", function(event){
  event.preventDefault();
  alertGen('Mesage Sent Sucsesfully!', 'success');
});




document.addEventListener("DOMContentLoaded", function(event) { 

  // add the X button to the alerts
  var alerts = document.querySelectorAll("[class^='alert']");
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].appendChild(closeButton.cloneNode(true));
  }

// set the default view of the chart
document.getElementById("weekly-option").className = "visits__option--active";
drawLineChartWeekly()


}); // end of document reddy


// this prints out alerts
function alertGen(say, style="default"){
  var alert = document.createElement("DIV");
  var alertText = document.createTextNode(say);
  alert.appendChild(alertText);
  alert.appendChild(closeButton.cloneNode(true));
  alert.classList.add("alert--" + style);
  alertContainer.appendChild(alert)
}