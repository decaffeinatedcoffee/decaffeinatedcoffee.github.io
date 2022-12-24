
///////////////////////////////This is for analytics function/////////////////////////////////////
////////////////////////////////No panic, all the infos collected are encrypted using CryptoJS and are > City, Region, Country, Time, VPN, 
///////////////////////////////Connection type and navigator user agent for device type info///////////////
/////////////////////////////////I'm not saving any private data, or geographic coordinates//////
////////////////////////////////You can see what are the collected data here: https://github.com/decaffeinatedcoffee/analytics
function submitForm(page){
var analyticsData = {deviceType: navigator.userAgent, lang : navigator.language, page : page};
var jsonData = JSON.stringify(analyticsData); 
submitData(jsonData)
}
function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://decaffeinatedcoffeeanalytics.onrender.com/analytics", true);
   xhttp.setRequestHeader("Content-Type", "application/json");
   xhttp.send(analyticsData);
}
var click = false;
function contato(){
if(click == false){
  const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://analyticsinfo.herokuapp.com/analyticsclick", true);
   xhttp.setRequestHeader("Content-Type", "application/json");
   xhttp.send(JSON.stringify({"click" : "true"}));
  click = true
   console.log("click!");
}
}
