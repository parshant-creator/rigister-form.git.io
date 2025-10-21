let sign = document.querySelector('#sign');
let para = document.querySelector('h1');
let nameField=document.querySelector('#name');
let logIn = document.querySelector('#login');

sign.onclick = function(){
    para.innerText ="Sign Up";
    nameField.style.display='block';
}
logIn.onclick=function(){
    para.innerText='LogIn';
    nameField.style.display='none';
}
