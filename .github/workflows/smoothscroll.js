// Smooth Scroll for Cesena Calcio
// max@frogstudio.it
// (c) 2019
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   
document.getElementById("desktop_logo").style.width = "200px";    

  } 
else 
{
     document.getElementById("desktop_logo").style.width = "100%"; 

  }
}
