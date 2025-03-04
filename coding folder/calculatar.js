let display = document.getElementById('inputBox');  
let buttons = document.getElementsByTagName('button');
let buttonsArray = Array.from(buttons);

buttonsArray.forEach(function(btn){
    btn.addEventListener('click', function(event){
      if(event.target.innerHTML == "Del"){
        display.value = display.value.substring(0, display.value.length-1)
      }else if(event.target.innerHTML == "Ac"){
        display.value = '';
      }else if(event.target.innerHTML == "="){
       if(display.value == 0){
        display.value="";
}else{
          display.value = eval(display.value);
        }

      }else
      display.value += event.target.innerHTML;
    })
  })
