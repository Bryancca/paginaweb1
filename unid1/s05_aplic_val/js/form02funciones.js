function fnValidar02()
{
    let xNombres= document.getElementById("txtNombres").value;
    if (xNombres==""){
        alert("Falta nombres....")
        return false;

    }
    let xApellidos= document.getElementById("txtApellidos").value;
    if (xApellidos==""){
        alert("Falta Apellidos....")
        return false;

    }  
    return true;
 
}