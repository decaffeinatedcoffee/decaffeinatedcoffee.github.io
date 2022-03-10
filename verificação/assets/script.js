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
var analyticsData = {page: "/verify", country: ipdata.country, region: ipdata.region, city: ipdata.city, deviceType: navigator.userAgent, time: time}; ////////////////////// << here you can see all collected data
var jsonData = JSON.stringify(analyticsData); 
submitData(jsonData)
 })

function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
   xhttp.open("POST", "https://analyticsinfo.herokuapp.com/", true);
   xhttp.setRequestHeader("Content-Type", "application/json");
   xhttp.send(analyticsData);
}


console.log("Hii, if you came here to try to break the verify to show me that this is not safe, i know that, (thank you anyway!) but it's a page for fun, if you still want to venture around the console, feel free ( :");
var escolha = Math.floor(Math.random() * 7);

const estilos = [
'line-through',
'none',
'underline',
'overline'

]
if(escolha <= 4){
document.getElementById('mostrador').style.textDecoration = estilos[escolha];
}
else if(escolha == 5){
var texto = document.getElementById("mostrador");
texto.style.textShadow = "1px 31px 0 red";
texto.style.mozTextShadow = "1px 31px 0 red";
texto.style.webkitTextShadow = "1px 31px 0 red";
}
else if(escolha == 6){
document.getElementById("mostrador").style.filter = "blur(1px)";

}
else if(escolha == 7){
    document.getElementById("mostrador").style.filter = "blur(2px)";
    
    }
    else{
        document.getElementById("mostrador").style.filter = "blur(3px)";
    }

var valorgerado = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5).toUpperCase();
document.getElementById('mostrador').innerHTML = valorgerado;

function checar() {

var valorentrada = document.getElementById('entrada').value;

if(valorentrada == ""){
    document.getElementById("mensagem").style.color = "red";
    document.getElementById('mensagem').innerHTML = "Por favor preencha a verificação!"
}

else if(valorentrada.toUpperCase() == valorgerado){
document.getElementById("mensagem").style.color = "green";
document.getElementById('mensagem').innerHTML = "Você passou na verificação!"
setTimeout(redirect, 1000)
function redirect() {
    location.replace("https://decaffeinatedcoffee.github.io/");
}


}
else{
 document.getElementById("mensagem").style.color = "red";
document.getElementById('mensagem').innerHTML = "Eita, tenta de novo"
 var escolha = Math.floor(Math.random() * 7);

if(escolha <= 4){
document.getElementById('mostrador').style.textDecoration = estilos[escolha];
}
else if(escolha == 5){
var texto = document.getElementById("mostrador");
texto.style.textShadow = "1px 31px 0 red";
texto.style.mozTextShadow = "1px 31px 0 red";
texto.style.webkitTextShadow = "1px 31px 0 red";
}
else if(escolha == 6){
document.getElementById("mostrador").style.filter = "blur(1px)";

}
else if(escolha == 7){
    document.getElementById("mostrador").style.filter = "blur(2px)";
    
    }
    else{
        document.getElementById("mostrador").style.filter = "blur(3px)";
    }

valorgerado = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5).toUpperCase();
document.getElementById('mostrador').innerHTML = valorgerado; 

}


}
