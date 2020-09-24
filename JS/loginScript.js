// var formLogin = document.getElementById('formLogin');
var loginName = document.getElementById('loginName'); /*obtengo el input de nombre de usuario */
var loginPassword = document.getElementById('loginPassword');/*obtengo el input de contraseña de usuario */
var icon_user_error = document.getElementById('icon_user_error');/*obtengo el icono de error de usuario */
var icon_pass_error = document.getElementById('icon_pass_error');/*obtengo el icono de error de password */
var error_user_text = document.getElementById('error_user_text');/*obtengo el texto de error de usuario */
var error_pass_text = document.getElementById('error_pass_text');/*obtengo el texto de error de password */
/* ==================================================================================================================================================== */
var selectLogin = document.getElementById('selectLogin');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_]{6,30}$/, // Letras, numeros y guion_bajo
    password: /^[a-zA-Z0-9\_\.\-]{4,20}$/, // 4 a 20 digitos.
}

formLogin.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    var nameValue = loginName.value.trim();
    var passwordValue =loginPassword.value.trim();
    // var selectValue = selectLogin.value.trim();

    if ((nameValue ==='') || (nameValue.length <= 5) || (passwordValue === '') || (!expresiones.usuario.test(nameValue)) || ( passwordValue.length <= 3) || (passwordValue.length > 20) || (!expresiones.password.test(passwordValue))) { /* agregar condicion de caracteres alfanumericos*/
        if (nameValue ==='') {
            setErrorFor(loginName,icon_user_error,error_user_text,'El nombre de usuario no puede estar en blanco');
        }
        else if (nameValue.length <= 5) {
            setErrorFor(loginName,icon_user_error,error_user_text,'El nombre de usuario no puede ser menor a 6 caracteres');
        }
        else if (!expresiones.usuario.test(nameValue)) { //tiene caracteres que no son alfanumericos
            setErrorFor(loginName,icon_user_error,error_user_text,'El nombre de usuario no puede tener caracteres especiales, solo letras , numeros o guion bajo');
        }
        else {
            // limpio los errores que tenia anteriormente
            cleanErrors(loginName,icon_user_error,error_user_text,'El nombre de usuario debe tener como minimo 6 caracteres unicamente alfanumericos y guion bajo');
        }
    /*============================================================================================================================================================================================== */
            
        if (passwordValue === '') {
            setErrorFor(loginPassword,icon_pass_error,error_pass_text,'La contraseña no puede estar en blanco');
        }
        else if (( passwordValue.length <= 3) || (passwordValue.length > 20)) {
            setErrorFor(loginPassword,icon_pass_error,error_pass_text,'La contraseña no puede ser menor a 4 caracteres o mayor a 20');
        }
        else if (!expresiones.password.test(passwordValue)) { //tiene caracteres que no son alfanumericos
            setErrorFor(loginPassword,icon_pass_error,error_pass_text,'La contraseña puede tener caracteres letras , numeros , guiones y algunos caracteres especiales');
        }
        else {
            // limpio los errores que tenia anteriormente
            cleanErrors(loginPassword,icon_pass_error,error_pass_text,'La contraseña puede tener como minimo 4 y como maximo 20 caracteres');
        }
    } else {
        // ver a que pagina mandar
        alert("redirigir a la pagina correspondiente");
        redirigir();
    }
}

function setErrorFor(inputPass,errorIcon, errorText, message){
    errorText.innerText = message; // seteo el mensaje con el error que tenga 
    errorText.className = ("error_text");//le pongo la clase que indica error
    errorIcon.classList.remove("iconClassError"); // le quito la clase al icono de error que lo hace invisible    
    inputPass.classList.add("error_input"); //agrego bordes rojos al input
}

function cleanErrors(inputPass,errorIcon, errorText, message){
    errorText.innerText = message; // seteo el mensaje con el que tenia originalmente
    errorText.classList.remove("error_text");//le saco la clase que indica error
    errorIcon.classList.add("iconClassError"); // le pongo la clase al icono de error que lo hace invisible    
    inputPass.classList.remove("error_input"); //le saco bordes rojos al input
}

function redirigir(){
    //hacer el redirigir
}