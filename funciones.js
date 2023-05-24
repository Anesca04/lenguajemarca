function verAjustes() {
    var tamLetra=window.localStorage.getItem("tamLetra");
    console.log('Comprueba si hay ajustes');
    if (tamLetra) { //Compruebo si hay ajustes de estilos guardados
        //Recupero el resto de ajustes guardados
        var colorLetra=window.localStorage.getItem("colorLetra");
        var usuario=sessionStorage.getItem("nomUsuario");

        document.getElementById("mostrarUsuario").innerHTML = "Usuario: " + usuario;

        //Aplicamos los estilos guardados
        document.documentElement.style.fontSize=parseFloat(tamLetra) + "rem";
        document.documentElement.style.setProperty("--colorNormal",colorLetra);

        //Estas líneas se pueden comentar después, es para comprobaciones.
        console.log('AJUSTES CARGADOS');
        console.log('Color elegido: ' + colorLetra);
        console.log('Tamaño texto: ' + tamLetra);
        console.log('Login usuario: ' + usuario);
    }
    else {
        //Cuando no hay ajustes guardados
        document.getElementById("mostrarUsuario").innerHTML = "Usuario: sin identificar";
    }
}

function guardarAjustes() {
    /*Recupero las variables*/
    var color=document.getElementsByName('colorElegido')[0];
    var tam=document.getElementsByName('tamFuente')[0];
    var tamelegido=tam[tam.selectedIndex].value;
    var usuario=document.getElementsByName('nomUsuario')[0];

    /*Para ver el valor de las variables por consola*/
    console.log('Color elegido: ' + color.value);
    console.log('Tamaño texto: ' + tamelegido);
    console.log('Usuario: ' + usuario.value);
    
    /*Aplico los estilos seleccionados*/
    document.documentElement.style.fontSize=parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal",color.value);

    /*Guardo las dos variables para la sesión*/
    window.localStorage.setItem("tamLetra", tamelegido);
    window.localStorage.setItem("colorLetra", color.value);
    sessionStorage.setItem("nomUsuario", usuario.value);

    console.log('LocalStorage tamañoLetra: ' + window.localStorage.getItem("tamLetra"));
    console.log('LocalStorage color: ' + window.localStorage.getItem("colorLetra"));

    //document.getElementById('mensaje').innerHTML="APLICADO";
}

function limpiarAjustes() {
    window.localStorage.clear();
    sessionStorage.clear();
    alert('AJUSTES ELIMINADOS');
}