function backspace() 
{
 bsp = document.getElementById("result").value
 bspc = document.getElementById("calc").value
     document.getElementById("result").value= bsp.substring(0,bsp.length-1);
     document.getElementById("calc").value= bspc.substring(0,bspc.length-1);
}
function clearScreen() 
{
 document.getElementById("result").value = "";
 document.getElementById("calc").value = "";
}
function display(value) 
{
     document.getElementById("result").value += value;
     document.getElementById("calc").value += value;
}
function plus() 
{
document.getElementById("calc").value = eval(document.getElementById("calc").value).toFixed(2);
document.getElementById("calc").value =document.getElementById("calc").value + "+"
document.getElementById("result").value =document.getElementById("result").value + "+"
}
function minus() 
{
document.getElementById("calc").value = eval(document.getElementById("calc").value).toFixed(2);
document.getElementById("result").value =document.getElementById("result").value + "-"
document.getElementById("calc").value =document.getElementById("calc").value + "-"
}
function calculate() 
{
document.getElementById("calc").value = eval(document.getElementById("calc").value).toFixed(2);
document.getElementById("result").value =document.getElementById("result").value + "="
}
function calsin()
{
     document.getElementById("result").value = document.getElementById("result").value + "sin(";
     document.getElementById("calc").value = document.getElementById("calc").value + "Math.sin(";
}
function caldeg()
{
     document.getElementById("result").value = document.getElementById("result").value + "deg";
     document.getElementById("calc").value = document.getElementById("calc").value + "*Math.PI/180";
}