$(document).ready(function(){

    $("#formReserva").submit(function(){
        alert("Estimad@ "+$("#nombreRes").val()+", agradecemos por reservar con nosotros. Hemos registrado "+$("#asistentesRes").val()+" asistentes. Se ha enviado el código de confirmación al correo "+$("#correoRes").val()+".\nGracias por preferirnos.")
    })

    $("#formContacto").submit(function(){
        alert("Muchas gracias "+$("#nombreCont").val()+", hemos recibido su "+$("#motivo").val()+" y enviaremos una pronta respuesta al correo "+$("#correoCont").val()+".")
    })

    $(".card").click(function(){
        $(this).addClass("active")
        $(".card-img-top").addClass("active")
        $("#overlay").fadeIn(300)
        $("#overlay").css("display","block")
    })

    $("#overlay").click(function(){
        $(this).css("display","none")
        $(".card").removeClass("active")
        $(".card-img-top").removeClass("active")
    })

    $("#navCont").click(function(){
        $("#formContacto").css("display","inline-block")
    })
    $("#navRes").click(function(){
        $("#formReserva").css("display","inline-block")
    })
    
})


/* JS anterior

function mostrarContacto() {
    document.getElementById("formContacto").style.display="inline-block"
}

function mostrarReserva() {
    document.getElementById("formReserva").style.display="inline-block"
}

/*
function ocultarContacto() {
    document.getElementById("formContacto").style.display="none"
}

function ocultarReserva() {
    document.getElementById("formReserva").style.display="none"
}
*/
/*
function agradecerCont() {
    alert("Muchas gracias "+document.getElementById("nombreCont").value+", hemos recibido su "+document.getElementById("motivo").value+" y enviaremos una pronta respuesta al correo "+document.getElementById("correoCont").value+".")
}

function comprobarCont() {
    if (document.getElementById("nombreCont").value=="") {
        alert("El campo Nombre es obligatorio.")
    } else if (document.getElementById("correoCont").value=="") {
        alert("El campo Correo es obligatorio.")
    } else if (document.getElementById("telefonoCont").value=="") {
        alert("El campo Teléfono es obligatorio.")
    } else if (document.getElementById("motivo").value=="") {
        alert("El campo Motivo es obligatorio.")
    } else if (document.getElementById("textareaCont").value=="") {
        alert("Por favor, detalle el motivo de su contacto.")
    }
}

function agradecerRes() {
    alert("Muchas gracias "+document.getElementById("nombreRes").value+", hemos realizado su reserva para el día "+document.getElementById("fechaRes").value+" a las "+document.getElementById("horaRes").value+" Hrs.\n\nGracias por preferirnos.")
}

function comprobarRes() {
    if (document.getElementById("nombreRes").value=="") {
        alert("El campo Nombre es obligatorio.")
    } else if (document.getElementById("correoRes").value=="") {
        alert("El campo Correo es obligatorio.")
    } else if (document.getElementById("telefonoRes").value=="") {
        alert("El campo Teléfono es obligatorio.")
    } else if (document.getElementById("fechaRes").value=="") {
        alert("El campo Fecha es obligatorio.")
    } else if (document.getElementById("horaRes").value=="") {
        alert("El campo Hora es obligatorio.")
    } else if (document.getElementById("asistentesRes").value=="") {
        alert("El campo Número de asistentes es obligatorio.")
    }
}

*/