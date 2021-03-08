var keyCliente = "ka-session"

function cerrarSesion() {
    localStorage.removeItem(keyCliente);
    location.href = "/"
}

function iniciarSesion(Usuario) {
    var datosCifrados = JSON.stringify(Usuario);
    localStorage.setItem(keyCliente, btoa(datosCifrados));
    //var rol = Usuario.Rol;
    location.href = "/lineaDetalles?idRecursoLinea=1";
}


function verificarCredencialesPagina() {
    var datos = localStorage.getItem(keyCliente);
    if (datos != null) {
        location.href = "/lineaDetalles?idRecursoLinea=1";
    }else{
        location.href = "/acceso";
    }
}

function verificarCredencialesLink(parametro) {
    var datos = localStorage.getItem(keyCliente);
    if (datos != null) {
        if(parametro == 1){
            location.href = "/lineaDetalles?idRecursoLinea=1";
        }else if(parametro == 2){
            location.href = "/lineaDetalles?idRecursoLinea=2";
        }else if(parametro == 3){
            location.href = "/lineaDetalles?idRecursoLinea=3";
        }else if(parametro == 4){
            location.href = "/lineaDetalles?idRecursoLinea=4";
        }else if(parametro == 5){
            location.href = "/lineaDetalles?idRecursoLinea=5";
        }else if(parametro == 6){
            location.href = "/lineaDetalles?idRecursoLinea=5";
        }
        
    }else{
        location.href = "/acceso";
    }
}

function verificarCredencialesRutas() {
    var datos = localStorage.getItem(keyCliente);
    if (datos === null) {
        router.navigate(['/']);
    }
}

function obtenerDatos() {
    var datos = localStorage.getItem(keyCliente);
    var datosPlanos
    if (datos == null) {
        datosPlanos = { "mensaje": "No se ha iniciado sesión." };
    } else {
        var bytes = atob(datos);
        datosPlanos = JSON.parse(bytes);
    }
    return datosPlanos;
}

