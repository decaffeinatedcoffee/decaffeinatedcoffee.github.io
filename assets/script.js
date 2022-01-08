


///////////////////////////////This is for analytics function/////////////////////////////////////
////////////////////////////////No panic, all the infos collected are > City, Region, Country, Time and navigator user agent for device type info///////////////
/////////////////////////////////I'm not saving your IP, or Geographic coordinates///////////////////////////////////// 
 let d = new Date();
 d.toLocaleString('en-US', { timeZone: "America/Sao_Paulo" });
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

var analyticsData = {country : ipdata.country, region: ipdata.region, city: ipdata.city, deviceType: navigator.userAgent, time: time}; ////////////////////// << here you can see all collected data
var jsonData = JSON.stringify(analyticsData); 
 submitData(jsonData)
  })



function submitData(analyticsData){

const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://analyticsinfo.herokuapp.com/", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(analyticsData);
}

///////////////////////////////////////////////END////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("listaidiomas").style.display = "none";
document.getElementById("portugues").style.display = "none";
document.getElementById("english").style.display = "none";
document.getElementById("deutsch").style.display = "none";

function showoptions(){

if(document.getElementById("listaidiomas").style.display == "none"){

document.getElementById("listaidiomas").style.display = "block";
document.getElementById("portugues").style.display = "block";
document.getElementById("english").style.display = "block";
document.getElementById("deutsch").style.display = "block";
}
else{

    document.getElementById("listaidiomas").style.display = "none";
document.getElementById("portugues").style.display = "none";
document.getElementById("english").style.display = "none";
document.getElementById("deutsch").style.display = "none";
}

}


function turnenglish (){
    document.title = "decaffeinatedcoffee's pages";
    document.getElementById("titulo").innerHTML = "Hi, how are you?";
    document.getElementById("subtitulo").innerHTML = "Here are all my pages";
    document.getElementById("redirecionar").innerHTML = "Or you can go back to my GitHub profile";
    document.getElementById("cheese").innerHTML = "Cheese";
    document.getElementById("tabuada").innerHTML = "Multiplication table";
    document.getElementById("christmas").innerHTML = "Christmas Countdown";
    document.getElementById("previsaotempo").innerHTML = "Weather forecast";
    document.getElementById("verify").innerHTML = "Verify";
    document.getElementById("CEP").innerHTML = "CEP (Only in Brazil)";
    document.getElementById("qrcode").innerHTML = "QR Code generator";
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    document.getElementById("deutsch").style.display = "none";

}

function turnportugues (){
    document.title = "Páginas de decaffeinatedcoffee";
    document.getElementById("titulo").innerHTML = "Oi, tudo bem?";
    document.getElementById("subtitulo").innerHTML = "Aqui estão todas as minhas páginas";
    document.getElementById("redirecionar").innerHTML = "Ou você pode voltar ao meu perfil";
    document.getElementById("cheese").innerHTML = "Cheese";
    document.getElementById("tabuada").innerHTML = "Tabuada";
    document.getElementById("christmas").innerHTML = "Contagem regressiva pro natal";
    document.getElementById("previsaotempo").innerHTML = "Previsão do tempo";
    document.getElementById("verify").innerHTML = "Verificação";
    document.getElementById("CEP").innerHTML = "Consulta CEP";
    document.getElementById("qrcode").innerHTML = "Gerador de QR Code";
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    document.getElementById("deutsch").style.display = "none";
    
}

function turndeutsch(){
    document.title = "decaffeinatedcoffee seiten";
    document.getElementById("titulo").innerHTML = "Hallo, wie geht es dir?";
    document.getElementById("subtitulo").innerHTML = "hier sind alle meine seiten";
    document.getElementById("redirecionar").innerHTML = "Oder gehen Sie zurück zu meinem Profil auf GitHub";
    document.getElementById("cheese").innerHTML = "Cheese";
    document.getElementById("tabuada").innerHTML = "Multiplikationstabelle";
    document.getElementById("christmas").innerHTML = "Weihnachts Countdown";
    document.getElementById("previsaotempo").innerHTML = "Wettervorhersage";
    document.getElementById("verify").innerHTML = "Prüfen";
    document.getElementById("CEP").innerHTML = "CEP (nur in Brasilien)";
    document.getElementById("qrcode").innerHTML = "QR Code generator";
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    document.getElementById("deutsch").style.display = "none";

}

