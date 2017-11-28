let display="";
let memory="";
let remember="";

//add digit to display
function setDisplay(){
  document.getElementById("display").value=display;
}

function addDigit(digit){
  if (memory!=""){
    display=memory+digit;
    remember=memory;
    memory="";
  }else if ((display=="") && (memory="")&& (display.includes(".")==false)){
    display=digit;
  } else if ((display=="")&&(memory!=="")){
    display=memory+digit;
    remember=memory;
    memory="";
  } else {
    display=display+digit;

  }
  setDisplay();

}

//clear Entry
function remove(){
    if(memory==!""){
      display=memory;
    }
    else if (memory==""){
      display=remember;
    }
    else {
      display="";
    }

  setDisplay();
}

//clear memory
function removeAll(){
  if(display!==""){
    display="";
    memory="";
    remember="";
  }
  setDisplay();
}

function calculate(){
    let result= eval(display);
  display=display+"="+result;
  setDisplay();
  memory=result;
}

function neg(){
  if (display=""){
    display="-";
  }
  if(display.charAt(0)!=="-"){
    display="-"+display;
  }
  else{
    display=display.substr(1, display.length);
  }
setDisplay();
}
