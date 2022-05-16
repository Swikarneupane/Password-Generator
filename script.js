let password = "";
let result = window.prompt("Enter the number of characters", 8);
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const pass3 = document.getElementById('pass3');
const pass4 = document.getElementById('pass4');

function generatePassword() {
    firstPass();
    secondPass();
    thirdPass();
    fourthPass();
}
function firstPass() {
    password = "";
    let length = result;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
    let n = chars.length;
    for ( let i = 0 ; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    pass1.textContent = password;
}
function secondPass() {
    password = "";
    let length = result;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
    let n = chars.length;
    for ( let i = 0 ; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    pass2.textContent = password;
}
function thirdPass() {
    password = "";
    let length = result;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
    let n = chars.length;
    for ( let i = 0 ; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    pass3.textContent = password;
}
function fourthPass() {
    password = "";
    let length = result;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
    let n = chars.length;
    for ( let i = 0 ; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    pass4.textContent = password;
}
