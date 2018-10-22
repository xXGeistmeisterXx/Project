//re

var has = [];
var active = [];
var hasEl = [];

var requestRight = [];
var requestLeft = [];

function addId(id){
  hasEl.push(document.getElementById(id));
  active.push(false);
  has.push(false);
  requestRight.push(false);
  requestLeft.push(false);
  document.getElementById(id).style.opacity = 0;
  document.getElementById(id).style.left = -document.getElementById(id).offsetWidth + "px";
}

addId("paragraph");
addId("msdstable");
addId("orgintable");
addId("matlist");
addId("aftertable");
addId("finaltable");
addId("proceed");

function updateScroll(){
  
  for(var i = 0; i < hasEl.length; i++){
    if(scrollValue > hasEl[i].offsetTop - (window.innerHeight) + (hasEl[i].offsetHeight * (2 / 3)) && scrollValue < hasEl[i].offsetTop + (hasEl[i].offsetHeight / 3)){
      if(!active[i] && !has[i]){
        active[i] = true;
        moveText(hasEl[i], "right", i);
      }else{
        requestRight[i] = true;
      }
    }else if(scrollValue < hasEl[i].offsetTop - (window.innerHeight) + (hasEl[i].offsetHeight * (2 / 3))){
      if(!active[i] && has[i]){
        active[i] = true;
        moveText(hasEl[i], "left", i);
      }else{
        requestLeft[i] = true;
      }
    }else if(scrollValue > hasEl[i].offsetTop - (hasEl[i].offsetHeight / 3)){
      if(!active[i] && has[i]){
        active[i] = true;
        moveText(hasEl[i], "left", i);
      }else{
        requestLeft[i] = true;
      }
    }
    
  }
}

var lastScrollTop = 0;
var scrollValue = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   
   scrollValue = window.scrollY;
   
   updateScroll();
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
