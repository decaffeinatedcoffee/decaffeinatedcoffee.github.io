
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
document.getElementById('mensagem').innerHTML = "Você passou no captcha!"
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
