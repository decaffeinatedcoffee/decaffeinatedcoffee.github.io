  var teststart;
    var testend;
    var testfile = 'https://www.dropbox.com/s/dtis47ytvzfo5va/test.mp3?dl=1';
      var size = 28804382;
      var audio = new Audio()
    
      
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
      audio.src = testfile + "&n=" + teststart;
      
      audio.onload = function () {
      calcresult();
      }
       audio.error = function () {
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
document.getElementById('errorbody').style.display = block;
}
