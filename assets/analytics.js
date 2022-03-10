
///////////////////////////////This is for analytics function/////////////////////////////////////
////////////////////////////////No panic, all the infos collected are > City, Region, Country, Time and navigator user agent for device type info///////////////
/////////////////////////////////I'm not saving your IP, or Geographic coordinates///////////////////////////////////// 

function submitForm(redirectpage){
let timezoneset = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
let d = new Date(timezoneset);
var year =     d.getFullYear();
var month =    d.getMonth() + 1;
var day =      d.getDate();
var hour =     d.getHours();
var minutes =  d.getMinutes();
var seconds  = d.getSeconds();
 let time = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
fetch("https://ipinfo.io/json")
 .then(function (ipinfo) {
   return ipinfo.json();
 })
 .then(function (ipdata) {
var analyticsData = {page: redirectpage, country: ipdata.country, region: ipdata.region, city: ipdata.city, deviceType: navigator.userAgent, time: time}; ////////////////////// << here you can see all collected data
var jsonData = JSON.stringify(analyticsData); 
submitData(jsonData)
 })
}


function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://analyticsinfo.herokuapp.com/datapost", true);
   xhttp.setRequestHeader("Content-Type", "application/json");
   xhttp.send(analyticsData);
}
