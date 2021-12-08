var counter = 0;
let audio = new Audio("assets/btva.mp3")
let audio2 = new Audio("assets/btva1.mp3")
function bemtevi() {
audio.pause();
audio2.pause();
audio.currentTime = 0;
audio2.currentTime = 0;
if(counter < 7){
document.getElementById('bemtevi').src = "assets/btv2.png";
document.querySelector("link[rel='shortcut icon']").href = "assets/btv2.png";
setTimeout(fechar, 1000)
counter ++;
audio.play();
}
else{
document.getElementById('bemtevi').src = "assets/btv3.png";    
document.querySelector("link[rel='shortcut icon']").href = "assets/btv3.png";
setTimeout(fechar, 1000)
audio2.play();
counter = 0;
}
}

function fechar() {
document.getElementById('bemtevi').src = "assets/btv1.png";
document.querySelector("link[rel='shortcut icon']").href = "assets/btv1.png";
}