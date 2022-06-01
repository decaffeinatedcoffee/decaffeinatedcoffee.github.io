
///////////////////////////////This is for analytics function/////////////////////////////////////
////////////////////////////////No panic, all the infos collected are > City, Region, Country, Time and navigator user agent for device type info///////////////
/////////////////////////////////I'm not saving your IP, or Geographic coordinates///////////////////////////////////// 

fetch("https://ipinfo.io/json")
 .then(function (ipinfo) {
   return ipinfo.json();
 })
 .then(function (ipdata) {
var analyticsData = {country: ipdata.country, region: ipdata.region, city: ipdata.city, deviceType: navigator.userAgent, lang : navigator.language}; ////////////////////// << here you can see all collected data
var jsonData = JSON.stringify(analyticsData); 
submitData(jsonData)
 })
function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://analyticsinfo.herokuapp.com/analytics", true);
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
