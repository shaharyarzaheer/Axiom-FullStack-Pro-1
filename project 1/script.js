// retrieving Emelmet from DOM

let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')


// Error func
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form_control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}


// Success func
function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success'
}


// create Event listner
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // For Username
    if (username.value === '') {
        showError(username,'Username is Required')
    } else {
        showSucess(username)
    }
    
    // For Email
    if (email.value === '') {
        showError(email,'Email is Required')
    } else {
        showSucess(email)
    }

    // For Password
    if (password.value === '') {
        showError(password,'Password is Required')
    } else {
        showSucess(password)
    }

    // For Password2
    if (password2.value === '') {
        showError(password2,'Confirm Password the field')
    } else {
        showSucess(password2)
    }

})