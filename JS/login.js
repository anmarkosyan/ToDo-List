//selectors

const user = document.forms['form']['username'];
const password = document.forms['form']['password'];

const user_error = document.getElementById('user_error');
const pass_error = document.getElementById('pass_error');


//event listeners
user.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);


//functions

function validated(){
    if (user.value.length < 9) {
        user.style.border = "1px solid red";
        user_error.style.display = "block";
        user.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

}
function user_Verify(){
    if (user.value.length >= 8) {
        user.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

