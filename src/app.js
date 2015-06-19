document.getElementsByClassName("color-code-input")[0].addEventListener("keyup",function(){
  var colorDisplayDiv = document.getElementsByClassName("color-display")[0];
  var colorCode = document.getElementsByClassName("color-code-input")[0].value;
  colorDisplayDiv.style.backgroundColor = colorCode;
});
