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
        confirmPwdMsg.textContent = 'passwords do not match'
        confirmPwdMsg.classList.remove('color-green')
        this.setCustomValidity('Passwords do not match')
    }
    else{
        confirmPwdMsg.textContent = 'passwords match'
        confirmPwdMsg.classList.add('color-green')
        this.setCustomValidity('')


    }
}