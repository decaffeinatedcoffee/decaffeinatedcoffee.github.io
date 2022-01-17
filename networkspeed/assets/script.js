  var teststart;
    var testend;
    var testfile = 'https://www.dropbox.com/s/zcc5vlbmc7ro113/image.gif?dl=1';
    ///////GIF from https://commons.m.wikimedia.org/wiki/File:2020-08-06-2143_C2020-F3-Neowise.gif/////////
  var size = 26193428;
      var image = new Image()
    
      
      fetch("https://ipapi.co/json/")
  .then(function (ipinfo) {
    return ipinfo.json();
  })
  .then(function (ipdata) {
    document.getElementById('ip').innerHTML = ipdata.ip + ' | ' + ipdata.org
  })
  
    function test() {
      document.getElementById('pre_test_body').style.display = 'none';
    document.getElementById('pos_test_body').style.display = 'none';
      document.getElementById('during_test_body').style.display = 'block';
      teststart = new Date();
      image.src = testfile + "&n=" + teststart;
      
      image.onload = function () {
      calcresult();
      }
       image.error = function () {
      error();
      }
}
function calcresult() {
  testend = new Date();
  var time = (testend - teststart) / 1000;
  var dlb = (size * 8)
  var speedb = (dlb / time).toFixed(2)
  var speedc = (speedb / 1024).toFixed(2);
  var speed = (speedc / 1024).toFixed(2);
 document.getElementById('during_test_body').style.display = 'none';
  document.getElementById('pos_test_body').style.display = 'block';
  document.getElementById('speedresult').innerHTML = speed + 'Mbps';
}

function error(){
document.getElementById('during_test_body').style.display = 'none';
document.getElementById('errorbody').style.display = 'block';
}
