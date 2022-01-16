 var breadsong = new Audio('assets/bread.mp3');
  var breadtwo = new Audio('assets/breadtwo.mp3');
  var counter= 0;
  var timer;

  function saybread() {
  if(counter <= 7){
    breadsong.play();
    counter ++;
  }else{
    breadtwo.play();
    counter = 0;
    timer = 6;
     setTimeout(timerset, 500);
  }
  }
  
  function timerset(){
    timer = timer - 1;
    if(timer > 0){
      document.getElementById('bread').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('timeout').style.display = 'block';
    document.getElementById('timeout').innerHTML = 'You ate too much bread, you can eat again in ' + timer + ' seconds';
    setTimeout(timerset, 1000);
  }else{
    document.getElementById('bread').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('timeout').style.display = 'none';
  }
  }
  
