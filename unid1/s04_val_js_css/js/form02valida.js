const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)){
        alert("FALTA SELECCIONAR PREFERENCIA");
        return false;
    
    }
    let xMes =document.getElementById("lstMes").value;
    if(xMes==""){
        alert("FALTA SELECCIONAR MES ACTUAL...");
        return false;
    } 
        
    return true;
       

}