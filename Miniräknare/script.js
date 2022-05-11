let display = document.getElementById("input-text");

function add(number){
    if(display.value == "Invalid equation"){
        display.value = number;
    }
    else{       
      display.value += number; 
    }
      //denna funktion fungerade inte när scriptlänken var i head -- placeholder? 
      console.log("number");  
 }

 document.getElementById("c").addEventListener("click", clear);

function clear(){
    
      display.value = " ";
      console.log("c");
  }

 function del(){
    if(display.value == "Invalid equation"){
        display.value = " ";
    }
    else
    display.value = display.value.slice(0,-1);
    console.log("del");
 }

 function calculate(){
      try{      
      display.value = eval(display.value);   
      }
      catch(err){
          display.value = "Invalid equation";
      }
 }


