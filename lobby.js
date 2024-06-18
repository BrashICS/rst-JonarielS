
'use strict';



document.getElementById("instructions").addEventListener("click", peakaboo)

document.getElementById("easymode").addEventListener("mouseover", easyreveal)
document.getElementById("normalmode").addEventListener("mouseover", normalreveal)
document.getElementById("hardmode").addEventListener("mouseover", hardreveal)


function peakaboo() {
  document.getElementById("hidden_text").hidden = !document.getElementById("hidden_text").hidden

 }

 function easyreveal(){
  document.getElementById("hidden_easy").hidden = !document.getElementById("hidden_easy").hidden
 }

 function normalreveal(){
  document.getElementById("hidden_normal").hidden = !document.getElementById("hidden_normal").hidden
 }

 function hardreveal(){
  document.getElementById("hidden_hard").hidden = !document.getElementById("hidden_hard").hidden
 }
