//VARIABLES

let costoCamaras = 0;
let costoInternet = 0;
let i = '';
let estructura = "";
let usuario1 = "";
let provisorio = "";

//FUNCIONES
//PRESUPUESTO

function presupuesto(i){
    while (i != 2){
        let servicio = parseInt(prompt('Ingrese el NUMERO 1:videovigilancia o 2:internet:'));
        switch (servicio){
            case 2:
                costoInternet += 1000;
                estructura = parseInt(prompt('Ahora elejí el tipo de lugar en donde se hará la instalacion, ingresa el NUMERO 1: "casa/departamento/local", 2: "edificio":'));
                if (estructura == 1){
                    costoInternet += 3000;
                    let conexion = parseInt(prompt('Elejí el tipo de conexion que desea, ingresa el NUMERO 1: "satelital", 2: "cableado", 3: "fibra optica": '));
                    switch (conexion){
                        case 1:
                            costoInternet += 500;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        case 2:
                            costoInternet += 1000;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        case 3:
                            costoInternet += 3000;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        default:
                            alert("El numero ingresado es incorrecto...");
                            costoInternet = 0;
                            return presupuesto();
                    }
                }else if (estructura == 2) {
                    costoInternet += 4000;
                    let conexion = parseInt(prompt('Elejí el tipo de conexion que desea, ingresa el NUMERO 1: "satelital", 2: "cableado", 3: "fibra optica": '));
                    switch (conexion){
                        case 1:
                            costoInternet += 100;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        case 2:
                            costoInternet += 2000;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        case 3:
                            costoInternet += 6000;
                            alert("El costo total de su servicio será: " + costoInternet);
                            break;
                        default:
                            alert('El numero ingresado es incorrecto...');
                            costoInternet = 0;
                            return presupuesto();
                    }
                }else {
                    alert("El numero ingresado es incorrecto...");
                    return presupuesto();
                }
                break;
            case 1:
                costoCamaras += 5000;
                estructura = parseInt(prompt('Ahora elejí el tipo de lugar en donde se hará la instalacion, ingresa el NUMERO 1:"casa/departamento", 2:"local/oficina", 3:"edificio":'));
                if (estructura == 1){
                    costoCamaras += 2000;
                    let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                    costoCamaras += 500 * camaras;
                    alert("El costo total de su servicio será: " + costoCamaras);
                }else if (estructura == 2){
                    costoCamaras += 4000;
                    let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                    costoCamaras += 800 * camaras;
                    alert("El costo total de su servicio será: " + costoCamaras);
                }else if (estructura == 3){
                    costoCamaras += 8000;
                    let camaras = parseInt(prompt("Elija la cantidad de camaras que desea instalar: "));
                    costoCamaras += 1000 * camaras;
                    alert("El costo total de su servicio será: " + costoCamaras);
                }else{
                    alert("El numero ingresado es incorrecto...")
                    costoCamaras = 0;
                    return presupuesto();
                }
                break;
            default:
                alert("El numero ingresado es incorrecto...");
                costoCamaras = 0;
                costoInternet = 0;
                return presupuesto();
            }
        let i = prompt('Ingrese "1" si desea agregar mas servicios, sino ingrese "2" para finalizar:');
        return presupuesto(i);    
    }
    
}

//REGISTRO DEL USUARIO

function creacionUsuario(){
    alert("Ingresaste al area de registro de usuario.");
    class persona{
        constructor(nombre,apellido,passw,cel){
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = passw;
        this.celular = cel;
        }
    }
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const passw = prompt("Ingresa tu contraseña:");
    const cel = parseInt(prompt("Ingresa tu numero de celular:"));
    let prov = new persona(nombre,apellido,passw,cel);
    return usuario1 = prov;
}

function registroUsuario(eleccion){
    if (eleccion == 1){
        eleccion = parseInt(prompt('Por el momento esta sección está en reparación, si desea registrarse ingrese "2", o para continuar como invitado ingrese "3":'));
        return registroUsuario(eleccion);
    }else if (eleccion == 2){
        creacionUsuario();
    }else if (eleccion == 3){
        alert("Vas a continuar como invitado");
        const nombre = prompt("Ingresa tu nombre:");
        const apellido = prompt("Ingresa tu apellido:");
        const cel = prompt("Ingresa tu numero de contacto:");
    }else{
        eleccion = parseInt(prompt('Opcion incorrecta, ingrese "1" para iniciar sesion, si desea registrarse ingrese "2", o para continuar como invitado ingrese "3":'));
        return registroUsuario(eleccion);
    }
}
//INICIO DEL PROGRAMA
alert('Bienvenido al sistema de presupuestado de servicios de Telistema. A continuacion te pediremos algunos datos para poder contactarnos con vos una vez terminada la consulta.');

let eleccion = parseInt(prompt('Si está registrado ingrese "1" para iniciar sesion, si desea registrarse ingrese "2", o para continuar como invitado ingrese "3":'));

//INGRESO Y CHEQUEO DE NUEVOS DATOS
registroUsuario(eleccion);
//INICIO DEL PRESUPUESTO
alert('Empecemos por definir el tipo de servicio sobre el que estas interesado...');
presupuesto();
let costoTotal = costoCamaras + costoInternet;
alert('¡Muchas gracias,' + usuario1.nombre + ' por consultar sobre nuestros servicio! El total de tu presupuesto es de:' + costoTotal +  '. Nos estaremos contactando con vos al numero' + usuario1.celular +' de Lunes a Viernes de 9hs a 17hs para concretar tu compra.');