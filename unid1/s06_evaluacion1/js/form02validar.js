function fnValidar02()
{
	var xTexto =document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Inserte un Texto");
        return false;
    }

    var elementoPref = document.getElementsByName("chk2Preferr");
    var valorElegidoPreferencia ="";
    var eligioPreferencia = false;
    for(var i=0; i < elementoPref.length; i++ ){
        if(elementoPref[i].checked){
            valorElegidoPreferencia = elementoPref[i].Value;
            eligioPreferencia = true;
        }
    }
    if(!eligioPreferencia){
        alert("Elija un Genero");
        return false;
    }
    
    var elementoPref = document.getElementsByName("chk2Prefer");
    var contador=0;
    for(var i=0; i < elementoPref.length; i++ ){
        if(elementoPref[i].checked){
            contador ++;
        }
    }
    if(contador !=2){
        alert("Elija dos Preferencias");
        return false;
        
    }
    return true;
    }


