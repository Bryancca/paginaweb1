const pasarTexto = () => {
    var xValor = document.getElementsByName("texto1").value;
    document.getElementById("texto2").value = xValor;
	
}

const fnConcatenar = () => {
    var xTexto1 = document.getElementById("texto1").value;
    var xTexto2 =  document.getElementById("texto3").value;
    document.getElementById("texto04").value = xTexto1 + "/" + xTexto3;
	
}
