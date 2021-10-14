function obter() {

    var cidade = document.getElementById("cidade").value;
var logradouro = document.getElementById("logradouro").value;
var UF = document.getElementById("uf").value;

    if(UF != "vazio" && cidade != "" && logradouro != ""){
fetch("https://viacep.com.br/ws/"+ UF + "/" + cidade + "/" + logradouro + "/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    document.getElementById("pre").style.display = 'none'
      document.getElementById("pos").style.display = 'block'
      
      document.getElementById("resultadoinfo").innerHTML = myJson[0].logradouro + ", " + myJson[0].bairro + ", " + myJson[0].localidade + ", " + myJson[0].uf;
  document.getElementById("resultado").innerHTML = "CEP: " + myJson[0].cep + " (DDD " + myJson[0].ddd + ")";
 

  })
  .catch(function(error) {
    document.getElementById("feedback2").innerHTML = "Eita, Acho que esse endereço está errado, Você pode tentar novamente?";
});
}
    
else{
    document.getElementById("feedback").innerHTML = "Não podem existir campos vazios!"

}
}

function repetir() {

location.reload();
}
