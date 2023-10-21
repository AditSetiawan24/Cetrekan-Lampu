function saklar(state, lamp) {

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  
  if (state) {
    if(lamp == 1) {
      lampu1.src = "on.gif";
    }
     if(lamp == 2) {
      lampu2.src = "on.gif";
    }
     if(lamp == 3) {
      lampu3.src = "on.gif";
    }
    
  }
  
  else {
    if(lamp == 1) {
      lampu1.src = "off.gif";
    }
     if(lamp == 2) {
      lampu2.src = "off.gif";
    }
     if(lamp == 3) {
      lampu3.src = "off.gif";
    }
    
  }
}