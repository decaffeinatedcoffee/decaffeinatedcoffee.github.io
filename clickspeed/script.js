
var started = false;
var counterVal = 0;
var timeSet = 100;
var timerValue = 5;
var mode = "none";
var bcm = localStorage.getItem("bestCPM");
var bcs = localStorage.getItem("bestCPS");
var bcmkb = localStorage.getItem("bestCPMkb");
var bcskb = localStorage.getItem("bestCPSkb");
var bcme;
var bcse;
check();
updateCounter();
function check(){
if(started != true){
document.getElementById("starttext").style.display = "none";
setTimeout(()=> document.getElementById("starttext").style.display = "block",900);
setTimeout(check, 1800)
}
}

function updateCounter(){
if(started == true){
setTimeout(counter, 1000);
}else{
    setTimeout(updateCounter, 1000);
}
}

function counter(){
    timeSet = timeSet - 20;
    timerValue = timerValue - 1;
    document.getElementById("timebar").style.width = timeSet + "%";
    if(timerValue){
    document.getElementById("timer").innerText = timerValue;
    if(timerValue == 3){
        document.getElementById("timebar").style.border = "1px solid purple";
    }
    if(timerValue == 2){
        document.getElementById("timebar").style.border = "1px solid red";
    }
    }
    if(timerValue<= 0){
      started = "ended";
      ShowResults();
    }
    updateCounter();
}

    document.addEventListener("click", function(){
        if(started == "idle"){
                location.reload();
            }
        if(started == true || started == false){
            if(started == false){
    started = true;
    mode = "mouse";
    document.getElementById("timer").innerText = 5;
            }
            
            if(mode == "mouse"){
    document.getElementById("mode").innerText = "Mouse mode";
    document.getElementById("main").innerText = "";
    document.getElementById("resultCPM").innerText = "";
    document.getElementById("resultCPS").innerText = "";
    document.getElementById("timebar").style.width = timeSet + "%";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("main").innerText = counterVal + " Clicks";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("best").style.display = "none";
    document.getElementById("timebar").style.display = "block";
    document.getElementById("bestCPM").innerText = "";
    document.getElementById("bestCPS").innerText = "";
    document.getElementById("timer").style.display = "block";
    counterVal++;
        }
    }
})



function ShowResults(){
    document.getElementById("mode").innerText = "";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("timebar").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("best").style.display = "block";
    document.getElementById("share").style.display = "block";
    document.getElementById("main").innerText = "Your results with "+ mode + ":";
    document.getElementById("best").innerText = "Your best with " + mode + ":";
    document.getElementById("resultCPM").innerText = Math.round(counterVal * 12) + " CPM";
    document.getElementById("resultCPS").innerText = Math.round(counterVal / 5) + " CPS";

if(mode == "mouse"){

    if(bcm){
        if(bcm < Math.round(counterVal * 12)){
            bcme = Math.round(counterVal * 12)
            localStorage.setItem("bestCPM", bcme);
        }else{
            bcme = bcm;
        }
    }else{
        bcme = Math.round(counterVal * 12);
        localStorage.setItem("bestCPM", bcme);
    }

    if(bcs){
        if(bcs < Math.round(Math.round(counterVal / 5))){
            bcse = Math.round(Math.round(counterVal / 5))
            localStorage.setItem("bestCPS", bcse);
        }else{
            bcse = bcs
        }
    }else{
        bcse = Math.round(Math.round(counterVal / 5));
        localStorage.setItem("bestCPS", bcse);
    }
}
else if(mode == "keyboard"){
    if(bcmkb){
        if(bcmkb < Math.round(counterVal * 12)){
            bcme = Math.round(counterVal * 12)
            localStorage.setItem("bestCPMkb", bcme);
        }else{
            bcme = bcmkb;
        }
    }else{
        bcme = Math.round(counterVal * 12);
        localStorage.setItem("bestCPMkb", bcme);
    }

    if(bcskb){
        if(bcskb < Math.round(Math.round(counterVal / 5))){
            bcse = Math.round(Math.round(counterVal / 5))
            localStorage.setItem("bestCPSkb", bcse);
        }else{
            bcse = bcskb;
        }
    }else{
        bcse = Math.round(Math.round(counterVal / 5));
        localStorage.setItem("bestCPSkb", bcse);
    }
}




    document.getElementById("bestCPM").innerText = bcme + " CPM";
    document.getElementById("bestCPS").innerText = bcse + " CPS";
    setTimeout(retry,3000);
    function retry(){
    started = "idle";
    counterVal = 0;
    timeSet = 100;
    timerValue = 5;
    mode = "none";
    check(); 
    updateCounter();
    }
}

document.onkeypress = function() 
{if(started == "idle"){
                location.reload();
            }
    if(started == true || started == false){
            if(started == false){
    started = true;
    mode = "keyboard";
    document.getElementById("timer").innerText = 5;
            }
            
            if(mode == "keyboard"){
    document.getElementById("mode").innerText = "Keyboard mode";
    document.getElementById("main").innerText = "";
    document.getElementById("resultCPM").innerText = "";
    document.getElementById("resultCPS").innerText = "";
    document.getElementById("timebar").style.width = timeSet + "%";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("main").innerText = counterVal + " Clicks";
    document.getElementById("starttext").style.display = "none";
    document.getElementById("timebar").style.display = "block";
    document.getElementById("timer").style.display = "block";
    counterVal++;
        }
    }
};
