let error = new Audio('assets/error.mp3')
let success = new Audio('assets/success.mp3')
let github = new Audio("assets/github.mp3")
function generate(){
document.getElementById('codigo').innerHTML = ""    
var qrdata = document.getElementById('entrada').value
if(qrdata == "" || qrdata.includes("ㅤ") || qrdata == " "){
    document.getElementById('codigo').innerHTML = ""  
    document.getElementById('codigo').innerHTML = "Por favor digite uma URL ou texto válido"   
    error.play();
}
else{
var qrlib = new QRCode(document.getElementById('codigo'))
qrlib.makeCode(qrdata)
success.play()
}
}

function exibir() {
    var value = document.getElementById('entrada').value
if(value == "https://www.youtube.com/watch?v=dQw4w9WgXcQ"){
    document.getElementById("botao").innerHTML = 'RICKROLL!'
    document.getElementById("botao").style.display = 'block'
  }
  else if(value != ""){
    document.getElementById("botao").innerHTML = 'Gerar código'
    document.getElementById("botao").style.display = 'block'
  }
  else{
    document.getElementById("botao").style.display = 'none'
  }
}

function githubs(){
    github.play()
    setTimeout(redirect,1000)
    function redirect(){
    location.replace("https://github.com/decaffeinatedcoffee")
    }
}