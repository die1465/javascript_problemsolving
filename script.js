function animationa(id){
    let element = document.getElementById(id);
    let textnode = element.childNodes[0];
    let text = textnode.data;

    setInterval(
        function() {
            text = text[text.length-1]+ text.substring(0, text.length-1);
            textnode.data = text;
        }, 100);
}
function leapyear(){
    let dt = new Date(Date.now());
    if (dt.getFullYear()%4 === 0) {
        document.getElementById("checkleapyear").innerHTML = "Yes!!!!"
    } else if (dt.getFullYear()%4 !== 0) {
        document.getElementById("checkleapyear").innerHTML = "NO :( :( :("
    }
}
//random number game
function randomnum(){
    let ran = Math.round(Math.random() * 10);
    let mes = prompt("enter a random number between 1 to 10 to see if u get a match");
    let rand = document.getElementById("rand");
    let mess = parseInt(mes);
    if (ran === mess) {
        rand.innerHTML = "good work!!"
    } else if(ran !== mess){
        rand.innerHTML = "not match, please try again"
    }
}
//muti/division from user
function multi() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
    var form = document.getElementById("forms");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    
}
function division() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 / num2;
    var form = document.getElementById("forms");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
//celcius to fahrrenheit
function celcuis(){
    let mes = prompt("enter temp in celsius to convert to fahrenhiet:");
    let mess = parseInt(mes);
    let temp = ((9 * mess) + 32 )/5;
    document.getElementById("resultcel").innerHTML = mess +" C is "+temp+" F";
}
//get curent page url
document.getElementById("localurl").innerHTML = "the current url is: "+ window.location.href;
//get file extensions
function extensions(){
    let ext = prompt("enter file name to get extension: ");
    document.getElementById("extension").innerHTML = ext.split(".").pop();
}
//getting the difference between a given num and 13, if num more that 13 get double absolute value of it
function difference13() {
    let diff = prompt("input number: ");
    let difference = parseInt(diff);
    let result = document.getElementById("differ13");
    let val = 13 - difference;
    let asbo = Math.abs(val);
    if(difference<=13){
        result.innerHTML = asbo;
    }else if(difference>13){
        result.innerHTML = asbo*2;
    }
}
//cumpute sum of 2 ints, if same then triple sum.
function sum2ints() {
    let int10 = document.getElementById("int1").value;
    let int20 = document.getElementById("int2").value;
    let int1 = parseInt(int10);
    let int2 = parseInt(int20);
    let result = document.getElementById("intresult");
    let sum = int1 + int2;
    var form = document.getElementById("intform");
    if(int1 !== int2){
        result.innerHTML = sum;
    }else if(int1 === int2){
        result.innerHTML = sum * 3;
    }
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("int1").value = "";
    document.getElementById("int2").value = "";
}
//check String to add Py if non at the beginning if there is then return original string
function addPy(){
    let mes = prompt("enter String:");
    let result = document.getElementById("Pystring");
    if (mes.substring(0, 2)!=="Py") {
        result.innerHTML = "Py" + mes;
    }else{
        result.innerHTML = mes;
    }
}
//change first and last character of a string
function changestring(){
    let mes = prompt("enter string to change first and last character: ");
    let first = mes.charAt(0);
    let last = mes.charAt(mes.length -1);
    let mess = last + mes.substring(2, last -1)+ first;
    result.innerHTML = `$(num) is a multiple of 3`;
}
//check a given number whether is it a multiple of 3 or 7
function multipleof3(){
    let mes = prompt("put number to check if it is a multiple of 3 or 7: ");
    let num = parseInt(mes);
    let result = document.getElementById("multipleof3");
    if (num%3===0) {
        result.innerHTML = `${num} is a multiple of 3`;
    } else if (num%7===0){
        result.innerHTML = `${num} is a multiple of 7`;
    }else {
        result.innerHTML = `${num} is not a multiple of 3 or 7`;
    }
}
//check if the string is java if not return false
function checkjava(){
    let mes = prompt("check if java:");
    let result = document.getElementById("checkjava");
    if(mes.substring(0,4)==="java"){
        result.innerHTML = true
    }else{
        result.innerHTML = false
    }
}
//check if given number is in range of 50 and 99
function checkrange(){
    let mes = document.getElementById("check1").value;
    let mes1 = document.getElementById("check2").value;
    let num1 = parseInt(mes);
    let num2 = parseInt(mes1);
    let check =0;
    for (let i = 50; i < 100; i++) {
        if(num1 === i){
            check +=1;
        }else if(num2 === i){
            check += 1;
        }
   }
   if(check === 2){
       document.getElementById("check5099").innerHTML = true;
   }else if(check !== 2){
    document.getElementById("check5099").innerHTML = false;
   }
   document.getElementById("check1").value = "";
   document.getElementById("check2").value = "";
} 
//check if Script is in the string at the beginning
function script(){
    let mes = document.getElementById("scripting").value;
    let result = document.getElementById("script");
    if(mes.substring(0, 6)==="Script"){
        result.innerHTML = mes.substring(6, mes.length);
    }else{
        result.innerHTML = mes;
    }
    document.getElementById("scripting").value ="";
}
//check which value is nearest to 100 from 2 nums
function checknums(){
    let mes = document.getElementById("checknum1").value;
    let mes1 = document.getElementById("checknum2").value;
    let result = document.getElementById("checknums");
    let mess = parseInt(mes);
    let mess1 = parseInt(mes1);
    let num1 = Math.abs(mess-100);
    let num2 = Math.abs(mess1-100);
    if(num1 > num2){
        result.innerHTML = `${mess} is closest to 100 than ${mess1}`;
    }else if(num1<num2){
        result.innerHTML = `${mess1} is closest to 100 ${mess}`;
    }
    document.getElementById("checknum1").value = "";
    document.getElementById("checknum2").value = "";
}
//check if a and w is at 2nd and 4th char in a string
function checkchar(){
    let str = document.getElementById("checkstr1").value;
    let result = document.getElementById("checkstr");
    if(str.charAt(1)==="a" && str.charAt(3)==="w"){
        result.innerHTML = "contains a and w at correct index";
    }else if(str.charAt(1)!=="a" && str.charAt(3)!=="w"){
        result.innerHTML = "does not contains a and w at correct index";
    }
    document.getElementById("checkstr1").value = "";
}
//check if last 3 digits of nums are the same
function checklast(){
    let num1 = document.getElementById("intnum1").value;
    let num2 = document.getElementById("intnum2").value;
    let num3 = document.getElementById("intnum3").value;
    let result = document.getElementById("checkintnum");
    let numlen = num1.toString();
    let num2len = num2.toString();
    let num3len = num3.toString();
    
    if (numlen.charAt(numlen.length-1) === num2len.charAt(num2len.length-1) && numlen.charAt(numlen.length-1) === num3len.charAt(num3len.length-1)) {
        result.innerHTML= "same last digits";
    }else{
        result.innerHTML = "not same last digits";
    }
    document.getElementById("intnum1").value = "";
    document.getElementById("intnum2").value = "";
    document.getElementById("intnum3").value = "";
}
//grading total mark 89 to 100=a+, in final mark 90 and above a+
function grading(){
    let num = document.getElementById("grade1").value;
    let numing = document.getElementById("grade2").value;
    let num1 = parseInt(num);
    let num2 = parseInt(numing);
    let graderesult = document.getElementById("graderesult");
    let totalresult = document.getElementById("totalresult");
    if(num1>=89 && num1<=100){
        totalresult.innerHTML = "A+"
    }else if(num1<89){
        totalresult.innerHTML = "under A+"
    }else if(num1>100){
        alert("grade can't be more than 100");
    }
    if(num2>=90 && num2<=100){
        graderesult.innerHTML = "A+";
    }else if(num2<90){
        graderesult.innerHTML = "under A+";
    }else if(num2>100){
        alert("grade can't be more than 100");
    }
    document.getElementById("grade1").value = "";
    document.getElementById("grade2").value = "";
}
//take 3 numbers, if the same print 30, if all not the same print 20, if 2 are the same print 40
function take3nums(){
    let num = document.getElementById("takenum1").value;
    let nums = document.getElementById("takenum2").value;
    let numss = document.getElementById("takenum3").value;
    let num1 = parseInt(num);
    let num2 = parseInt(nums);
    let num3 = parseInt(numss);
    let result = document.getElementById("resulttakenum");
    if (num1===num2 && num1===num3) {
        result.innerHTML = 30;
    }else if((num1===num2 && num1 !==num3) || (num2===num1 && num2 !==num3) || num3===num1 && num3 !==num2){
        result.innerHTML = 40;
    }else if(num1 !== num2 && num1 !== num3){
        result.innerHTML = 20;
    }
    document.getElementById("takenum1").value = "";
    document.getElementById("takenum2").value = "";
    document.getElementById("takenum3").value = "";
}