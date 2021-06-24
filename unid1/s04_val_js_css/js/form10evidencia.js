const fnValidar10 = () => {
    let xTexto =document.getElementById("txtNombre").value;
    
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("FALTA NOMBRES Y APELLIDOS !!");
        return false;
    }

    let xNumero =document.getElementById("txtEdad").value;
    if(xNumero=="") {
        alert("FALTA EDAD!!");
        return false;
    } 

    
    
    let elementoPref = document.getElementsByName("chk2Prefer");
   	let valorElegidoPreferencia ="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++ ){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].Value;
			eligioPreferencia = true;
		}
	}
    if(!eligioPreferencia){
		alert("Elija una Preferencia...");
		return false;
	
	}
    return true;
    }
