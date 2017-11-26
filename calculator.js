let display="";
let memory="";


//add digit to display


function addDigit(digit){
  if((display=="") && (memory="")&& (display.includes(".")==false)){
    display=digit;
  } else if ((display=="")&&(memory!=="")){
    display=memory+digit;
    memory="";
  } else {
    display=display+digit;

  }
  document.getElementById("display").value=display;

}

//clear Entry
function remove(){
    display=memory;
  document.getElementById("display").value=display;
}

//clear memory
function removeAll(){
  if(display!==""){
    display="";
  }
  document.getElementById("display").value=display;
}

function calculate(){
    let result= eval(display);
  display=display+"="+result;
  document.getElementById("display").value=display;
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
document.getElementById("display").value=display;
}
