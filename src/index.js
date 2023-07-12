import './style.css'
import leafBG from './imgs/leaf_bg.png'
import angelIMG from "./imgs/angel.jpg"

let img = new Image()
img.src = leafBG


let pwd = document.querySelector('#password')
let confirmPwd = document.querySelector('#confirm-password')
let confirmPwdMsg = document.querySelector('.confirm-pwd-msg')

confirmPwd.addEventListener('keyup', validateConfirmPwd)

function validateConfirmPwd(e){
    console.log(`pwd: ${pwd.value}\nconf:${e.target.value}`);
    if (e.target.value !== pwd.value){
        console.log('pwds do not match');
        confirmPwdMsg.textContent = 'passwords do not match'
        confirmPwdMsg.classList.remove('color-green')
        this.setCustomValidity('Passwords do not match')
    }
    else{
        console.log('pwds match');
        confirmPwdMsg.textContent = 'passwords match'
        confirmPwdMsg.classList.add('color-green')
        this.setCustomValidity('')


    }
    
    console.log(this.reportValidity());
    console.log(e.target.reportValidity());
    console.log(this.checkValidity());
    console.log(e.target.checkValidity());
}