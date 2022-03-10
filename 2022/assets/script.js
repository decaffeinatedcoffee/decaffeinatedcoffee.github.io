timer();

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
var analyticsData = {page: "/2022", country: ipdata.country, region: ipdata.region, city: ipdata.city, deviceType: navigator.userAgent, time: time}; ////////////////////// << here you can see all collected data
var jsonData = JSON.stringify(analyticsData); 
submitData(jsonData)
 })

function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://analyticsinfo.herokuapp.com/", true);
   xhttp.setRequestHeader("Content-Type", "application/json");
   xhttp.send(analyticsData);
}

function timer(){
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
let data = new Date();
data.toLocaleString('en-US', { timeZone: timezone });
var horaatual = data.getHours();
var atual = new Date().getTime();
var end = new Date('Jan 1, 2022 00:00:00').getTime();
var restante = end - atual;
var dias = Math.floor(restante / (1000 * 60 * 60 * 24));
var horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((restante % (1000 * 60)) / 1000);
if(dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0){
    document.getElementById("timer").innerHTML =  "0 days 0 hours 0 minutes and 0 seconds until 2022"
    document.getElementById("status").innerHTML = "The show will be available in 2 seconds!"
    document.title = "Its 2022!"
    setTimeout(countdownshow, 1000)
    setTimeout(start, 2000);
}
else{
document.getElementById("status").innerHTML = "The show will start at January 1st 2022!"
document.getElementById("timer").innerHTML = dias + " days " +  horas + " hours " + minutos + " minutes and " + segundos + " seconds until 2022"
document.title = dias + " days until 2022"
setTimeout(timer, 1000);

}
}

function start() {
document.getElementById('botao').style.display = 'block'
}

function play(){
document.getElementById("divcounter").style.display = "none"
document.getElementById('botao').style.display = 'none'
document.getElementById("video").style.display = "block"
document.getElementById("videofile").play();
}

document.getElementById('videofile').addEventListener('ended',handler,false);
function handler(e) {
    document.getElementById("status").innerHTML = "Did you like?"
    document.getElementById('botao').innerHTML = 'Click here to watch again'
    document.getElementById("divcounter").style.display = "block"
document.getElementById('botao').style.display = 'block'
document.getElementById("video").style.display = "none"
}

function countdownshow() {

    document.getElementById("status").innerHTML = "The show will be available in 1 second!"
    setTimeout(endshow,1000)
}
function endshow() {
    document.getElementById("status").innerHTML = "The show is now available"
}
