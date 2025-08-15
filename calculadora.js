let displayValue = "0";


function agregarDisplay(valor){
    if(displayValue ===  "0" && valor !=  "."){
        displayValue = valor;
    }else{
        displayValue += valor; 
    }
    console.log(displayValue)
    actualizarDisplay()
}

function actualizarDisplay(){
    document.getElementById('display').textContent =displayValue
}
function limpiarCalculadora(){
    displayValue = "0";
    actualizarDisplay()
}
function borrarUltimo(){
    displayValue = displayValue.slice(0, -1) || "0"
    actualizarDisplay()
}
function calcularResultado(){
    const resultado = eval(displayValue.replace('x', '*').replace('%', '/'))
    displayValue = resultado.toString();
    actualizarDisplay();
}