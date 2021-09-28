var trueorfalse = true;
var counter = "0";


function smode(){

if(document.getElementById("checkboxx").value == "on"){

 document.getElementById("checkboxx").value = "off"

}
else{
    document.getElementById("checkboxx").value = "on"

}


if(document.getElementById("checkboxx").value == "on"){
   trueorfalse = true;
   counter = "0"
}
else{
   trueorfalse = false;
   counter = "0"
}

}







function start() {
document.getElementById("eat").style.display = "none";
counter++;
if(counter >= "10" && trueorfalse == true){
    document.getElementById("audio2").play();

}
else{

    document.getElementById("audio").play();

}

if(counter >= "10"){
    fade();
}

}


function fade1() {


document.getElementById("cheese").style.opacity = 0.9
document.getElementById("cheese").disabled = true;
counter = 0
}


function fade2() {

    document.getElementById("cheese").style.opacity = 0.6

    
}


function fade3() {


    document.getElementById("cheese").style.opacity = 0.3
    
}


function fade4() {

    document.getElementById("cheese").style.opacity = 0.0
    counterstart();
    
}


function fade() {

setTimeout(fade1,100);
setTimeout(fade2,200);
setTimeout(fade3,300);
setTimeout(fade4,400);



}



function counter4(){
var varcounter = "4";
document.getElementById("number").style.display = "block";
document.getElementById("youate").style.display = "block";
document.getElementById("number").innerHTML = varcounter;
}

function counter3(){
var varcounter = "3";
document.getElementById("number").innerHTML = varcounter;
}

function counter2(){
var varcounter = "2";
document.getElementById("number").innerHTML = varcounter;
}

function counter1(){
var varcounter = "1";
document.getElementById("number").innerHTML = varcounter;
}
function counter0(){
document.getElementById("number").style.display = "none";
document.getElementById("youate").style.display = "none";
cheeseback();
}

function counterstart() {
setTimeout(counter4, 1000);
setTimeout(counter3, 2000);
setTimeout(counter2, 3000);
setTimeout(counter1, 4000);
setTimeout(counter0, 5000);
}




function back1() {


document.getElementById("cheese").style.opacity = 0.0
document.getElementById("cheese").disabled = false;
}


function back2() {

    document.getElementById("cheese").style.opacity = 0.3

    
}


function back3() {


    document.getElementById("cheese").style.opacity = 0.6
    
}


function back4() {

    document.getElementById("cheese").style.opacity = 0.9
       
}









function cheeseback() {
setTimeout(back1,100);
setTimeout(back2,200);
setTimeout(back3,300);
setTimeout(back4,400);


}
