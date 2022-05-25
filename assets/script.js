$("#name").fadeIn(1000, ()=>{
   $("#what").fadeIn("slow")})
   $("#info").fadeIn(1000);
   
   var lang = "hid";

   function showlang(){
       if(lang == "hid"){
       $("#selector").fadeIn(400);
       lang = "nhid";
       }else{
        $("#selector").fadeOut(400);
        lang = "hid";
       }
   }
   function setlang(lang){
       showlang();
       if(lang == "en"){
           location.replace("/EN");
       }
       if(lang == "pt"){
           location.replace("/PT");
       }
   }
