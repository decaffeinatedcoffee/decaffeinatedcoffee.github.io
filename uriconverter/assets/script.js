let upload;
  let texttocopy;
function setimage() {
  
upload = URL.createObjectURL(document.getElementById('inputimg').files[0]);
document.getElementById('clickhere').style.display = 'none';
document.getElementById('convert').style.display = 'block';
document.getElementById('new_input').style.backgroundSize= '100% 100%';
document.getElementById('new_input').style.backgroundImage= 'url('+upload+')';

}
  
function convert(){
  
 const convert = (imageupload) => {
  const image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const converted = canvas.toDataURL("image/png");
    document.getElementById('pre_convert').style.display = 'none';
  document.getElementById('pos_convert').style.display = 'block';
  document.getElementById('result').innerHTML = 'Here is your result: <br> <br> ' + converted;
  texttocopy = converted;
  }
  image.src = imageupload
}

convert(upload);
}


function checkmobile() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    copyanyway = confirm("The page detected you are using a mobile device, copying big texts on a mobile may cause crashes and keyboard bugs, are you sure you want to copy?");
if (copyanyway) {
  copy();
}
}else{
 copy();
}
  }
  
 function copy(){
 navigator.clipboard.writeText(texttocopy).then(function () {
  alert('Copied!')
}, function () {
 alert('Failed to copy sorry, try to copy manually.')
});
 }
