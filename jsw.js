
flashscreen
setTimeout(function () {
    let flashscreen = document.getElementById('flashscreen');
    let mainbody = document.getElementById('mainbody');

    flashscreen.style.display = "none";
    mainbody.style.display = "block";

}, 3000);

let more = document.getElementById('start');
let num =0;
function press() {

    let btn = document.getElementById('btn');
    let text = document.getElementById('ag');
    btn.value = "OK";
    btn.setAttribute("style", "color:white");
    text.setAttribute("style", "color:white");
     num = 1;
}
more.addEventListener('click',()=>{
if(num == 1)
{
let mainbody=document.getElementById('mainbody').style.display="none";
let aftermainbody=document.getElementById('aftermainbody').style.display="block";
}
else
alert('Please accept the terms and conditions');

});