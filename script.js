function add (){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText="Result :" + (num1+num2);
}
function subtract(){
let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
document.getElementById("result").innerText="Result :" + (num1-num2);
}
function multiply(){
let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
document.getElementById("result").innerText="Result :" + (num1*num2);
}
function divide(){
let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
document.getElementById("result").innerText="Result :" + (num1/num2);
}
function square(){
    let num1=document.getElementById("num1").value;
document.getElementById("result").innerHTML="result :" + (num1 * num1);

}
function cube(){

    let num1=document.getElementById("num1").value;

document.getElementById("result").innerHTML="result :" + (num1 * num1 * num1);



}
