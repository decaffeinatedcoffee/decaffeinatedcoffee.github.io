
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
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    document.getElementById("deutsch").style.display = "none";

}

