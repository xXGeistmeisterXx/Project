function moveText(element, where, whe){
  
  let left = (where == "left");
  let ind = whe;
  let wid = element.offsetWidth;
  
  let op = 0;
  
  let inc = 0;
  if(element.style.left.substring(0, element.style.left.length - 2) !== ""){
    inc = parseInt(element.style.left.substring(0, element.style.left.length - 2), 10);
  }
  
  const frame = function(){
    
    if(requestRight[ind] && left){
      requestRight[ind] = false;
      moveText(hasEl[ind], "right", ind);
      clearInterval(id);
    }
    if(requestLeft[ind] && !left){
      requestLeft[ind] = false;
      moveText(hasEl[ind], "left", ind);
      clearInterval(id);
    }
    
    let at = 0;
    if(element.style.left.substring(0, element.style.left.length - 2) !== ""){
      at = parseInt(element.style.left.substring(0, element.style.left.length - 2), 10);
    }
    if(left){
      if(at < -wid){
        element.style.opacity = 0;
        active[ind] = false;
        has[ind] = false;
        clearInterval(id);
      }else{
        op = ((at + wid) / ((window.innerWidth / 2) - (wid / 2) + wid));
        element.style.opacity = op;
        inc -= (((3 / (op + 1)) - 1) * 10) - 1.5;
        element.style.left = inc + "px";
      }
    }else{
      if(at > ((window.innerWidth / 2) - (wid / 2))){
        element.style.opacity = 1;
        active[ind] = false;
        has[ind] = true;
        clearInterval(id);
      }else{
        op = ((at + wid) / ((window.innerWidth / 2) - (wid / 2) + wid));
        element.style.opacity = op;
        inc += (((3 / (op + 1)) - 1) * 10) - 1.5;
        element.style.left = inc + "px";
      }
    }
  }
  
  let id = setInterval(frame, 3);
  
}
