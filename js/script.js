const primerNombre = document.querySelector('#nombre');
const primerApellido = document.querySelector('#apellido');
const emailAddress  = document.querySelector('#email');
const contrasena = document.querySelector('#contrasena');

const primerNombreError = document.querySelector('#nombreError');
const primerApellidoError = document.querySelector('#apellidoError');
const emailError = document.querySelector('#correoError');
const contrasenaError = document.querySelector('#contrasenaError');

const botonEnviar = document.querySelector('#enviar');

botonEnviar.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(primerNombre.value, nombre, primerNombreError, 'First Name');
    validateEmpty(primerApellido.value, apellido, primerApellidoError, 'Last Name');
    validateEmail(emailAddress.value, email, emailError)
    validateEmpty(contrasena.value, contrasena, contrasenaError, 'Password');
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError, 'Looks like this is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, `${nameInput} cannot be empty`);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = ' 1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class="error">${error}</p>`
}

function hideError(divInput, divError){
    divInput.style.border = ' 1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``
}
