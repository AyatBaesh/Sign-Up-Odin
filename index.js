const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPassword');
const submitButton = document.querySelector('#submitButton');
const errorMessage = document.querySelector('#error-message')

submitButton.addEventListener('click', (event) => {
    if(pass.value != confirmPass.value){
        event.preventDefault();
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';
        alert('Succesfully submitted');
    }
    
})