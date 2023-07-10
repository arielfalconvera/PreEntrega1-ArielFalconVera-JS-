alert('Bienvenido al sistema de presupuestado de servicios de Telistema. A continuacion te pediremos algunos datos para poder contactarnos con vos una vez terminada la consulta.');

let nombre = prompt('Ingrese solo su NOMBRE: ');
let apellido = prompt('Ingrese su APELLIDO: ');
let email = prompt('Ingrese su EMAIL: ');
let numCel = prompt('Ingrese un NUMERO de contacto: ');

let DatosUsuario = parseInt(prompt('Los datos ingresado son Nombre: ' + nombre + ', Apellido: ' + apellido + ', Email: ' + email + ', Numero de contacto: ' + numCel + '. Si los datos ingresados son correctos ingrese "1", si desea corregir ingrese "2":'));

function validacion(validacionDatos){
    if (validacionDatos == 2){
        nombre = prompt('Vuelva a ingresar solo su NOMBRE: ');
        apellido = prompt('Vuelva a ingresar su APELLIDO: ');
        email = prompt('Vuelva a ingresar su EMAIL: ');
        numCel = prompt('Vuelva a ingresar un NUMERO de contacto: ')
        validacionDatos = prompt('Sus nuevos datos reingresados son Nombre: ' + nombre + ', Apellido: ' + apellido + ', Email: ' + email + ', Numero de contacto: ' + numCel + '. Si los datos ingresados son correctos ingrese "1", si desea corregir ingrese "2":');
    }else if (validacionDatos == 1){
        return alert('¡Sus datos son correctos y han sido registrados!');
    }else{
        validacionDatos = prompt('Respuesta no valida, ingrese continuar o corregir: ');
        
    }
    validacion(validacionDatos);
}

validacion(DatosUsuario);

alert('Empecemos por definir el tipo de servicio sobre el que estas interesado...');

let servicio = parseInt(prompt('Ingrese el NUMERO 1:videovigilancia o 2:internet:'));

let costo = 0;
let i = '';
let estructura = "";

while (i != 2){
    switch (servicio){
        case 2:
            costo += 1000;
            estructura = parseInt(prompt('Ahora elejí el tipo de lugar en donde se hará la instalacion, ingresa el NUMERO 1: "casa/departamento/local", 2: "edificio":'));
            if (estructura == 1){
                costo += 3000;
                let conexion = parseInt(prompt('Elejí el tipo de conexion que desea, ingresa el NUMERO 1: "satelital", 2: "cableado", 3: "fibra optica": '));
                switch (conexion){
                    case 1:
                        costo += 500;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    case 2:
                        costo += 1000;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    case 3:
                        costo += 3000;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    default:
                        alert('Conexion no elegida.');
                        break;
                }
            }else {
                costo += 4000;
                let conexion = parseInt(prompt('Elejí el tipo de conexion que desea, ingresa el NUMERO 1: "satelital", 2: "cableado", 3: "fibra optica": '));
                switch (conexion){
                    case 1:
                        costo += 100;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    case 2:
                        costo += 2000;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    case 3:
                        costo += 6000;
                        alert("El costo total de su servicio será: " + costo);
                        break;
                    default:
                        alert('Conexion no elegida.');
                        break;
                }
            }
            break;
        default:
            costo += 5000;
            estructura = parseInt(prompt('Ahora elejí el tipo de lugar en donde se hará la instalacion, ingresa el NUMERO 1:"casa/departamento", 2:"local/oficina", 3:"edificio":'));
            if (estructura == 1){
                costo += 2000;
                let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                costo += 500 * camaras;
                alert("El costo total de su servicio será: " + costo);
            }else if (estructura == 2){
                costo += 4000;
                let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                costo += 800 * camaras;
                alert("El costo total de su servicio será: " + costo);
            }else{
                costo += 8000;
                let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                costo += 1000 * camaras;
                alert("El costo total de su servicio será: " + costo);
            }
            break;
    }
    i = prompt('Ingrese "1" si desea agregar mas servicios, sino ingrese "2" para finalizar:');
}
alert('¡Muchas gracias por consultar sobre nuestros servicio! El total de tu presupuesto es de:' + costo +  '. Nos estaremos contactando con vos de Lunes a Viernes de 9hs a 17hs para concretar tu compra.')