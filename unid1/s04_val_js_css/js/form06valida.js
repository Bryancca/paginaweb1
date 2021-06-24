const fnValidar06 = () => {
    var xCorreo = document.getElementById("txtCorreo").value;
    if(! ( /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,}))){1,3}$/.test(xCorreo))) { 
        alert("Escribe Correo Valido...");
        return false;   
    }
    return true;
}