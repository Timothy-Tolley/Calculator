let display="0";


//add digit to display
function addDigit(digit){
  if((display=="0") && (display.includes(".")==false)){
    display=digit;
  } else {
    display=display+digit;
  }
  document.getElementById("display").value=display;
}


//clear Entry
function remove(){
  if(display!=="0"){
    display="";
  }
  document.getElementById("display").value=display;
}

function calculate(){
  let result= eval(display);
  display=display+"="+result;
  document.getElementById("display").value=display;

}
