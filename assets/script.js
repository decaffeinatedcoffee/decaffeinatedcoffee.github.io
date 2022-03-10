function changeLang(){
    var currentLang = document.getElementById("lang").value;
    if(currentLang == "EN"){
        location.replace("/EN");
    }else if(currentLang == "PT"){
     location.replace("/PT");
    }
}

