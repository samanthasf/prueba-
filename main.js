let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let borrar = document.getElementById('limpiar');
let imagen =document.getElementById('imagen');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
const seguridad= document.getElementById('seguridad');

function generar() {
    let numerodigitado = parseInt(cantidad.value);

    if (numerodigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';

    for (let i = 0; i < numerodigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    contrasena.value = password;

    validarSeguridad(password);
}

function limpiar() {
    contrasena.value = "";
    cantidad.value = "";
    seguridad.innerHTML = "";
}


function validarSeguridad(contrasena) {
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneNumeros = /[0-9]/.test(contrasena);
    const tieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contrasena);

    if (tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales) {
        seguridad.innerHTML = 'Su seguridad es alta';
        seguridad.style.color = "lime";
        imagen.src ="src/verde.svg";
        imagen.style.display="inline";
    } else if (tieneMayusculas && tieneMinusculas && (tieneNumeros || tieneCaracteresEspeciales)) {
        seguridad.innerHTML = 'Su seguridad es intermedia';
        seguridad.style.color = "yellow";
        imagen.src="src/amarillo.svg";
        imagen.style.display="inline";
    } else if (tieneMayusculas && tieneMinusculas) {
        seguridad.innerHTML = 'Su seguridad es baja';
        seguridad.style.color = "red";
        imagen.src="src/rojo.svg";
        imagen.style.display="inline";
    }
}









