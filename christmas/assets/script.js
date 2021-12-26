let hours = [
    '🕛',
    '🕐',
    '🕑',
    '🕒',
     '🕓',
     '🕔',
     '🕕',
     '🕖',
     '🕗',
     '🕘',
     '🕙',
     '🕚',
     '🕛',
     '🕐',
     '🕑',
     '🕒',
      '🕓',
      '🕔',
      '🕕',
      '🕖',
      '🕗',
      '🕘',
      '🕙',
      '🕚'
]

timer();

function timer(){
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
let data = new Date();
data.toLocaleString('en-US', { timeZone: timezone });
var horaatual = data.getHours();
var currentday = data.getDate();
var atual = new Date().getTime();
var end = new Date('Dec 25, 2022 00:00:00').getTime();
var restante = end - atual;
var dias = Math.floor(restante / (1000 * 60 * 60 * 24));
var horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((restante % (1000 * 60)) / 1000);
if(dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0){
    document.getElementById("timer").innerHTML =  "0 days 0 hours 0 minutes and 0 seconds until Christmas"
    document.getElementById("resposta").innerHTML = "YES"
    document.getElementById("gift").style.display = "block"
    document.querySelector("link[rel*='icon']").href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎅</text></svg>";
    document.title = "Its christmas!"
}
else if(dias == 0 && currentday == 24){
document.getElementById("resposta").innerHTML = "NO, BUT ALMOST"
document.getElementById("gift").style.display = "none"
document.getElementById("timer").innerHTML = dias + " days " +  horas + " hours " + minutos + " minutes and " + segundos + " seconds until Christmas"
document.querySelector("link[rel*='icon']").href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>"+ hours[horaatual] +"</text></svg>";
document.title = "Its not christmas yet 😢"
setTimeout(timer, 1000);
}
else{
document.getElementById("resposta").innerHTML = "NO"
document.getElementById("gift").style.display = "none"
document.getElementById("timer").innerHTML = dias + " days " +  horas + " hours " + minutos + " minutes and " + segundos + " seconds until Christmas"
document.querySelector("link[rel*='icon']").href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>"+ hours[horaatual] +"</text></svg>";
document.title = "Its not christmas yet 😢"
setTimeout(timer, 1000);

}
}
