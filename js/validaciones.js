export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=""  
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input)
    }

}
const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
  nombre:{
    valueMissing:"este campo no puede estar vacio "
  },
  email:{
    valueMissing:"este campo no puede estar vacio",
    typeMisMatch:"el correo no es valido"
  } ,
  password:{
    valueMissing :"Estere campo no puede estar vacio",
    patternMismatch:"al menos 6 caracteres, maximo 12"
  },
  nacimiento:{
    valueMissing :"Estere campo no puede estar vacio",
    customError:"debes ser mayor de edad",
},
numero :{
valueMissing :"este campo no puede estar vacio",
patternMismatch:"al menos 10 caracteres, maximo 10"


},
direccion :{
    valueMissing :"este campo no puede estar vacio",
    patternMismatch:"debe contener entre 10 y 40 caracteres"

},
cuidad :{
    valueMissing :"este campo no puede estar vacio",
    patternMismatch:"debe contener entre 10 y 40 caracteres"

},
estado :{
    valueMissing :"este campo no puede estar vacio",
    patternMismatch:"debe contener entre 10 y 40 caracteres"

}
}


const validadores={
 nacimiento :(input) => validarNacimientp(input),    
};
function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = ""
    tipoDeErrores.forEach(error =>{
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
            
        }
    })
    return mensaje

}

function validarNacimientp(input){
    const fechaCliente = new Date (input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje="debes ser mayor de edad";

    };
    input.setCustomValidity(mensaje);

}
  function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const defereenciaFechas = new Date (
        fecha.getUTCFullYear() + 18,
         fecha.getUTCMonth(), 
         fecha.getUTCDate());

    return defereenciaFechas <= fechaActual;
}