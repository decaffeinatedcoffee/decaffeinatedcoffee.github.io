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
valorgerado = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5).toUpperCase();
document.getElementById('mostrador').innerHTML = valorgerado; 

}


}
