
 var idioma = "0";

document.getElementById("listaidiomas").style.display = "none";
document.getElementById("portugues").style.display = "none";
document.getElementById("english").style.display = "none";

function showoptions(){

if(document.getElementById("listaidiomas").style.display == "none"){

document.getElementById("listaidiomas").style.display = "block";
document.getElementById("portugues").style.display = "block";
document.getElementById("english").style.display = "block";
}
else{

    document.getElementById("listaidiomas").style.display = "none";
document.getElementById("portugues").style.display = "none";
document.getElementById("english").style.display = "none";
}

}


function turnenglish (){

    idioma = "1";
    document.getElementById("titulo").innerHTML = "Welcome to multiplication table calculator";
    document.getElementById("subtitulo").innerHTML = "Enter the number and click get result";
    document.getElementById("campotexto").placeholder = "type here";
    document.getElementById("obter").innerHTML = "get result";
    document.getElementById("mais").innerHTML = "gimme more results";
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
}

function turnportugues (){
    idioma = "0";
    document.getElementById("titulo").innerHTML = "Bem vindo a calculadora de tabuada";
    document.getElementById("subtitulo").innerHTML = "Digite o numero e clique em obter";
    document.getElementById("campotexto").placeholder = "digite aqui";
    document.getElementById("obter").innerHTML = "obter";
    document.getElementById("mais").innerHTML = "Me de mais resultados!";
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    
}



function obtervalor() {
    resetall();
    document.getElementById("idiomas").style.display = "none"
    document.getElementById("lang").style.display = "none"
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    var valorrequerido = document.getElementById("campotexto").value;

 if(isNaN(valorrequerido)){
     if(idioma === "0"){
     document.getElementById("x0").innerHTML = "O ultimo valor era invalido );";
     alert("Eita, aparentemente o ultimo numero não era valido");   
     }
     if(idioma === "1"){
     alert("Jeez, it looks that the last number wasn't valid.");   
     document.getElementById("x0").innerHTML = "The last value was not a valid one );";
     }

}

else{
    document.getElementById("mais").disabled = false;
    document.getElementById("x0").innerHTML = valorrequerido + " x 0 = " +   valorrequerido * "0";
    document.getElementById("x1").innerHTML = valorrequerido + " x 1 = " +   valorrequerido * "1";
    document.getElementById("x2").innerHTML = valorrequerido + " x 2 = " +   valorrequerido * "2";
    document.getElementById("x3").innerHTML = valorrequerido + " x 3 = " +   valorrequerido * "3";
    document.getElementById("x4").innerHTML = valorrequerido + " x 4 = " +   valorrequerido * "4";
    document.getElementById("x5").innerHTML = valorrequerido + " x 5 = " +   valorrequerido * "5";
    document.getElementById("x6").innerHTML = valorrequerido + " x 6 = " +   valorrequerido * "6";
    document.getElementById("x7").innerHTML = valorrequerido + " x 7 = " +   valorrequerido * "7";
    document.getElementById("x8").innerHTML = valorrequerido + " x 8 = " +   valorrequerido * "8";
    document.getElementById("x9").innerHTML = valorrequerido + " x 9 = " +    valorrequerido * "9";
    document.getElementById("x10").innerHTML = valorrequerido + " x 10 = " +    valorrequerido * "10";
    document.getElementById("mais").style.display = "block";
}




}

function mais(){
    resetall();
    document.getElementById("idiomas").style.display = "none"
    document.getElementById("lang").style.display = "none"
    document.getElementById("listaidiomas").style.display = "none";
    document.getElementById("portugues").style.display = "none";
    document.getElementById("english").style.display = "none";
    var valorrequerido = document.getElementById("campotexto").value;

    if(isNaN(valorrequerido)){
        if(idioma === "0"){
     document.getElementById("x0").innerHTML = "O ultimo valor era invalido );";
     alert("Eita, aparentemente o ultimo numero não era valido");   
     }
     if(idioma === "1"){
     alert("Jeez, it looks that the last number wasn't valid.");   
     document.getElementById("x0").innerHTML = "The last value was not a valid one );";
     }
     resetall();

}
else{
    
    document.getElementById("mais").style.display = "none";
    document.getElementById("x0").innerHTML = valorrequerido + " x 0 = " +   valorrequerido * "0";
    document.getElementById("x1").innerHTML = valorrequerido + " x 1 = " +   valorrequerido * "1";
    document.getElementById("x2").innerHTML = valorrequerido + " x 2 = " +   valorrequerido * "2";
    document.getElementById("x3").innerHTML = valorrequerido + " x 3 = " +   valorrequerido * "3";
    document.getElementById("x4").innerHTML = valorrequerido + " x 4 = " +   valorrequerido * "4";
    document.getElementById("x5").innerHTML = valorrequerido + " x 5 = " +   valorrequerido * "5";
    document.getElementById("x6").innerHTML = valorrequerido + " x 6 = " +   valorrequerido * "6";
    document.getElementById("x7").innerHTML = valorrequerido + " x 7 = " +   valorrequerido * "7";
    document.getElementById("x8").innerHTML = valorrequerido + " x 8 = " +   valorrequerido * "8";
    document.getElementById("x9").innerHTML = valorrequerido + " x 9 = " +    valorrequerido * "9";
    document.getElementById("x10").innerHTML = valorrequerido + " x 10 = " +    valorrequerido * "10";
    document.getElementById("x11").innerHTML = valorrequerido + " x 11 = " +    valorrequerido * "11";
    document.getElementById("x12").innerHTML = valorrequerido + " x 12 = " +    valorrequerido * "12";
    document.getElementById("x13").innerHTML = valorrequerido + " x 13 = " +    valorrequerido * "13";
    document.getElementById("x14").innerHTML = valorrequerido + " x 14 = " +    valorrequerido * "14";
    document.getElementById("x15").innerHTML = valorrequerido + " x 15 = " +    valorrequerido * "15";
    document.getElementById("x16").innerHTML = valorrequerido + " x 16 = " +    valorrequerido * "16";
    document.getElementById("x17").innerHTML = valorrequerido + " x 17 = " +    valorrequerido * "17";
    document.getElementById("x18").innerHTML = valorrequerido + " x 18 = " +    valorrequerido * "18";
    document.getElementById("x19").innerHTML = valorrequerido + " x 19 = " +    valorrequerido * "19";
    document.getElementById("x20").innerHTML = valorrequerido + " x 20 = " +    valorrequerido * "20";
    document.getElementById("x21").innerHTML = valorrequerido + " x 21 = " +   valorrequerido * "21";
    document.getElementById("x22").innerHTML = valorrequerido + " x 22 = " +   valorrequerido * "22";
    document.getElementById("x23").innerHTML = valorrequerido + " x 23 = " +   valorrequerido * "23";
    document.getElementById("x24").innerHTML = valorrequerido + " x 24 = " +   valorrequerido * "24";
    document.getElementById("x25").innerHTML = valorrequerido + " x 25 = " +   valorrequerido * "25";
    document.getElementById("x26").innerHTML = valorrequerido + " x 26 = " +   valorrequerido * "26";
    document.getElementById("x27").innerHTML = valorrequerido + " x 27 = " +   valorrequerido * "27";
    document.getElementById("x28").innerHTML = valorrequerido + " x 28 = " +   valorrequerido * "28";
    document.getElementById("x29").innerHTML = valorrequerido + " x 29 = " +   valorrequerido * "29";
    document.getElementById("x30").innerHTML = valorrequerido + " x 30 = " +    valorrequerido * "30";
    document.getElementById("x31").innerHTML = valorrequerido + " x 31 = " +    valorrequerido * "31";
    document.getElementById("x32").innerHTML = valorrequerido + " x 32 = " +    valorrequerido * "32";
    document.getElementById("x33").innerHTML = valorrequerido + " x 33 = " +    valorrequerido * "33";
    document.getElementById("x34").innerHTML = valorrequerido + " x 34 = " +    valorrequerido * "34";
    document.getElementById("x35").innerHTML = valorrequerido + " x 35 = " +    valorrequerido * "35";
    document.getElementById("x36").innerHTML = valorrequerido + " x 36 = " +    valorrequerido * "36";
    document.getElementById("x37").innerHTML = valorrequerido + " x 37 = " +    valorrequerido * "37";
    document.getElementById("x38").innerHTML = valorrequerido + " x 38 = " +    valorrequerido * "38";
    document.getElementById("x39").innerHTML = valorrequerido + " x 39 = " +    valorrequerido * "39";
    document.getElementById("x40").innerHTML = valorrequerido + " x 40 = " +    valorrequerido * "40";
    
    if(idioma === "0") {
    document.getElementById("ultimo").innerHTML = "ufa, cansei de fazer tantas contas";
    }

   if(idioma === "1"){
    document.getElementById("ultimo").innerHTML = "Phew, it was a lot of math";
    }

}

}

function resetall(){
    var nada = "";
    document.getElementById("x0").innerHTML = nada;
    document.getElementById("x1").innerHTML = nada;
    document.getElementById("x2").innerHTML = nada;
    document.getElementById("x3").innerHTML = nada;
    document.getElementById("x4").innerHTML = nada;
    document.getElementById("x5").innerHTML = nada;
    document.getElementById("x6").innerHTML = nada;
    document.getElementById("x7").innerHTML = nada;
    document.getElementById("x8").innerHTML = nada;
    document.getElementById("x9").innerHTML = nada;
    document.getElementById("x10").innerHTML = nada;
    document.getElementById("x11").innerHTML = nada;
    document.getElementById("x12").innerHTML = nada;
    document.getElementById("x13").innerHTML = nada;
    document.getElementById("x14").innerHTML = nada;
    document.getElementById("x15").innerHTML = nada;
    document.getElementById("x16").innerHTML = nada;
    document.getElementById("x17").innerHTML = nada;
    document.getElementById("x18").innerHTML = nada;
    document.getElementById("x19").innerHTML = nada;
    document.getElementById("x20").innerHTML = nada;
    document.getElementById("x21").innerHTML = nada;
    document.getElementById("x22").innerHTML = nada;
    document.getElementById("x23").innerHTML = nada;
    document.getElementById("x24").innerHTML = nada;
    document.getElementById("x25").innerHTML = nada;
    document.getElementById("x26").innerHTML = nada;
    document.getElementById("x27").innerHTML = nada;
    document.getElementById("x28").innerHTML = nada;
    document.getElementById("x29").innerHTML = nada;
    document.getElementById("x30").innerHTML = nada;
    document.getElementById("x31").innerHTML = nada;
    document.getElementById("x32").innerHTML = nada;
    document.getElementById("x33").innerHTML = nada;
    document.getElementById("x34").innerHTML = nada;
    document.getElementById("x35").innerHTML = nada;
    document.getElementById("x36").innerHTML = nada;
    document.getElementById("x37").innerHTML = nada;
    document.getElementById("x38").innerHTML = nada;
    document.getElementById("x39").innerHTML = nada;
    document.getElementById("x40").innerHTML = nada;
    document.getElementById("ultimo").innerHTML = nada;

}
