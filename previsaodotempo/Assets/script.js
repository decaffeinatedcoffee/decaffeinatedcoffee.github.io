var latitude;
var longitude;
if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicao, erro)
} 

function erro(motivo){
    if(motivo.code === motivo.PERMISSION_DENIED){
        document.getElementById("condicao").innerHTML = "Localização negada, use o campo de busca.";
    }
}

function maiuscular(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var fade = "0.1";
aparecer();
function aparecer() {
document.getElementById("titulo").style.opacity = fade;
document.getElementById("condicao").style.opacity = fade;
document.getElementById("temperatura").style.opacity = fade;
document.getElementById("maximaminima").style.opacity = fade;
document.getElementById("umidade").style.opacity = fade;
document.getElementById("creditos").style.opacity = fade;
document.getElementById("digitar").style.opacity = fade;
document.getElementById("lupa").style.opacity = fade;
document.getElementById("opcao").style.opacity = fade;
if(fade < 1) {
 fade = fade*2;
    setTimeout(aparecer, 110);
}
}

function posicao(pos){
    longitude = pos.coords.longitude;
    latitude = pos.coords.latitude;
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude +"&lon=" + longitude + "&lang=PT_BR" + formatopadrao + "&mode=json&units=metric&cnt=1")
  .then(function (respostaclima) {
    return respostaclima.json();
  })
  .then(function (obtendoclima) {
      if(obtendoclima.message == "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."){
  location.reload();
    }
    var temperatura = Math.round(obtendoclima.list[0].main.temp);
  var obtercond = obtendoclima.list[0].weather[0].description
  var maxima = Math.round(obtendoclima.list[0].main.temp_max);
  var minima = Math.round(obtendoclima.list[0].main.temp_min);
  var umidade = Math.round(obtendoclima.list[0].main.humidity);
  var nome = (obtendoclima.city.name);
document.getElementById("titulo").innerHTML = nome;
document.getElementById("condicao").innerHTML = maiuscular(obtercond);
document.getElementById("temperatura").innerHTML = temperatura + "°";
document.getElementById("maximaminima").innerHTML = "Máxima: " + maxima + "° - Minima: " + minima + "°";
document.getElementById("umidade").innerHTML = "Umidade: " + umidade + "%";


var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if(obtercond == "céu limpo" || obtercond == "ensolarado" ){
    link.href = 'Assets/sol.ico';
    }
    else if(obtercond == "chuva" || obtercond == "chuvoso" || obtercond == "nublado" || obtercond == "parcialmente nublado" || obtercond == "nuvens"){
        link.href = 'Assets/chuva.ico';
    }
    else{
        link.href = 'Assets/padrao.ico';
    }
    document.getElementsByTagName('head')[0].appendChild(link);


  })

}



function procurar() {
   var paisselecionado = document.getElementById("opcao").value;
  var cidadedigitada = encodeURIComponent(document.getElementById("digitar").value);
  if(paisselecionado == "País"){
    document.getElementById("titulo").innerHTML = "";
document.getElementById("condicao").innerHTML = "Por favor selecione um país";
document.getElementById("temperatura").innerHTML = "";
document.getElementById("maximaminima").innerHTML = "";
document.getElementById("umidade").innerHTML= "";

  }
  else{
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cidadedigitada +"," + paisselecionado +"&lang=PT_BR" + formatopadrao + "&mode=json&units=metric&cnt=1")
  .then(function (respostaclima) {
    return respostaclima.json();
  })
  .then(function (obtendoclima) {
      var verificador = obtendoclima.message;
    if(verificador == "city not found"){ 
document.getElementById("titulo").innerHTML = "";
document.getElementById("condicao").innerHTML = "Cidade não encontrada!";
document.getElementById("temperatura").innerHTML = "";
document.getElementById("maximaminima").innerHTML = "";
document.getElementById("umidade").innerHTML= "";
}
else{
    
  var temperatura = Math.round(obtendoclima.list[0].main.temp);
  var obtercond = obtendoclima.list[0].weather[0].description
  var maxima = Math.round(obtendoclima.list[0].main.temp_max);
  var minima = Math.round(obtendoclima.list[0].main.temp_min);
  var umidade = Math.round(obtendoclima.list[0].main.humidity);
  var nome = (obtendoclima.city.name);
document.getElementById("titulo").innerHTML = nome;
document.getElementById("condicao").innerHTML = maiuscular(obtercond);
document.getElementById("temperatura").innerHTML = temperatura + "°";
document.getElementById("maximaminima").innerHTML = "Máxima: " + maxima + "° - Minima: " + minima + "°";
document.getElementById("umidade").innerHTML = "Umidade: " + umidade + "%";
}
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if(obtercond == "céu limpo" || obtercond == "ensolarado" ){
    link.href = 'Assets/sol.ico';
    }
    else if(obtercond == "chuva" || obtercond == "chuvoso" || obtercond == "nublado" || obtercond == "parcialmente nublado" || obtercond == "nuvens" || obtercond == "chuva leve" || obtercond == "temporal" || obtercond == "garoa" || obtercond == "nuvens dispersas"){
        link.href = 'Assets/nuvem.ico';
    }
    else{
        link.href = 'Assets/padrao.ico';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
  })
  .catch(function (erro) {
    console.log("Error: " + erro);
  });
  
}
}
