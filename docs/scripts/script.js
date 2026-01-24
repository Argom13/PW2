let formData = {};
document.addEventListener("DOMContentLoaded", ()=>{
    initFormValidation();
});

function initFormValidation(){
    formData.txtNombre = document.querySelector("#txtNombre");
    formData.txtEmail = document.querySelector("#txtEmail");
    formData.txtComment = document.querySelector("#txtMensaje");
    formData.btnEnviar = document.querySelector("#btnEnviar");
    formData.btnEnviar.addEventListener("click", validarFormulario);
}
const isEmptyRegex = /^\s*$/;
const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
function validarFormulario(e) {
    e.stopPropagation();
    let isValid = true;
    let emailValue = formData.txtEmail.value;
    let nameValue = formData.txtNombre.value;
    if ( isEmptyRegex.test(nameValue)) {
        alert("El Nombre es requerido");
        isValid = false;
    }
    if ( !isValidEmail.test(emailValue)) {
        alert( "El correo no es válido!");
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
}