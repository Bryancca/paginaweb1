const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia ="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++ ){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].Value;
			eligioPreferencia = true;
		}
	}

	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoPreEstado ="";
	let eligioEstado = false;
	for(let i=0; i < elementoEstado.length; i++ ){
		if(elementoPref[i].checked){
			valorElegidoPreEstado = elementoPref[i].Value;
			eligioEstado = true;
		}
	}

	if(!eligioPreferencia){
		alert("Elija una Preferencia...");
		return false;
	}else{
		alert("Su preferencia elegida es " +valorElegidoPreferencia);
	}
	if(!eligioEstado){
		alert("Elija un Estado Civil....");
		return false;
	}else{
		alert("Su estado civil es " +valorElegidoPreEstado);
	}
	return true;		

}