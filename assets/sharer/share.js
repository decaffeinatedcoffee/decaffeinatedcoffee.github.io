window.onload = function() {
loaded();
}
var sharedText;
var mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function loaded(){
document.getElementById("fb").addEventListener("click", function(){
    window.open('https://www.facebook.com/sharer.php?u=' + document.URL +'&quote=' + sharedText);
})
document.getElementById("wpp").addEventListener("click", function(){
   if(!mobile){
    window.open('https://web.whatsapp.com/send?text=' + sharedText + " " + document.URL);
   }
    else{
        window.open('https://wa.me/?text=' + sharedText + " " + document.URL);
    }
    })
document.getElementById("tt").addEventListener("click", function(){
    window.open('https://twitter.com/share?url='+ document.URL +'&text=' + sharedText);
})
}
