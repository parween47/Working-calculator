let input:any = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e:any) => {
    if (e.target.innerHTML == "=") {
      try{string = eval(string);
      input.value = string;}
      catch{
        input.value="ERROR"
      }
    } else if(e.target.innerHTML == "AC"){
       string=""
       input.value=string
    } else if(e.target.innerHTML == "DEL"){
      string=string.substring(0,string.length-1)
      input.value=string
    } else if(e.target.innerHTML == "%"){
      string=(parseInt(string)/100).toString()
      input.value=string
    } else if(e.target.innerHTML == "x"){
      string=string+"*"
      input.value=string
    }
    else {
       if(string[0]=="0"&& string[1] !== "."){
        string=string.substring(1,string.length)
        input.value=string
       } else{
        string += e.target.innerHTML
        input.value=string
       }
    }
  });
});
