const fnValidar01 = () => {
    let xTexto =document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("FALTA TEXTO");
        return false;

    }
    let xNumero =document.getElementById("txtNumero").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("FALTA NUMERO");
        return false;
    } 
    
    return true;
   

	
}

 //Pasos para validar en java script
    //1) formulario con elementos html con name y id
    //2) Evento que desencadene una funcion cuando pasa a otra pagina(submit)
    //3) Prueba logica en la funcion con retorno de true o false 
    //en e lmejor de los casos devolver verdadero or falso 