document.addEventListener("DOMContentLoaded",function(){document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();var e=document.getElementById("weight").value,t=document.getElementById("height").value,e=(e/(t*t)).toFixed(2),t=document.querySelector(".value");let o="";t.classList.add("attention"),document.querySelector(".infos").classList.remove("hidden"),e<18.5?o="Cuidado! Você está abaixo do peso!":18.5<=e&&e<=25?(o="Você está no peso ideal!",t.classList.remove("attention"),t.classList.add("normal")):o=25<e&&e<=30?"Cuidado! Você está com sobrepeso!":30<e&&e<=35?"Cuidado! Você está com obesidade moderada!":35<e&&e<=40?"Cuidado! Você está com obesidade severa!":"Cuidado! Você está com obesidade mórbida!",t.textContent=e.replace(".",","),document.querySelector(".description").textContent=o}),$("#weight").mask("000.00"),$("#height").mask("0.00")});