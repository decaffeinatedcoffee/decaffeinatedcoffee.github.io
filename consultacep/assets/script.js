cepnovo = true;
function obter () {
if(document.getElementById('CEPentrada').value == ""){
  document.getElementById("feedback").innerHTML = "Nenhum valor inserido!"    
}

else if(document.getElementById('CEPentrada').value.replace(/-/,"").length > 8){
    document.getElementById("feedback").innerHTML = "CEP inválido inserido!" 

}
else{
    var CEP = document.getElementById("CEPentrada").value.replace(/-/,"");

fetch("https://viacep.com.br/ws/"+ CEP +"/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
  console.log(myJson)
  var ddd = myJson.ddd;
  document.getElementById("feedback").style.innerHTML = "";
  document.getElementById("pre").style.display = "none";
  document.getElementById("pos").style.display = "block";
  document.getElementById("placecidade").innerHTML = myJson.localidade + " (DDD " + ddd + ")";
  document.getElementById("placebairro").innerHTML = myJson.bairro;
  document.getElementById("placelogradouro").innerHTML = myJson.logradouro;
  document.getElementById("placeestado").innerHTML = myJson.uf;
  });
}
}

function formatar() {
    if(document.getElementById('CEPentrada').value == ""){
        cepnovo = true;
    }
    if(document.getElementById('CEPentrada').value.length == 5 && cepnovo == true){
        var valoranterior = document.getElementById('CEPentrada').value;
        cepnovo = false;
        document.getElementById('CEPentrada').value = valoranterior + "-"
    }

    if(document.getElementById('CEPentrada').value.length == 9){
        var valoranterior = document.getElementById('CEPentrada').value;
        document.getElementById('CEPentrada').value = valoranterior;
    }


}

function repetir() {

location.reload();
}
