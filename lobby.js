
'use strict';



document.getElementById("instructions").addEventListener("click", peakaboo)

document.getElementById("easymode").addEventListener("mouseover", easyreveal)



function peakaboo() {
  document.getElementById("hidden_text").hidden = !document.getElementById("hidden_text").hidden

 }

 function easyreveal(){
  document.getElementById("hidden_easy").hidden = !document.getElementById("hidden_easy").hidden
 }
