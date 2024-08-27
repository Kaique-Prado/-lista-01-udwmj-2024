const table = document.querySelectorAll("tabela");

function insert(numero) {
  document.getElementById("display").innerHTML += numero;
}

function calculo() {
    let resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML  = eval(resultado)
    } else {
        document.getElementById('display').innerHTML = "0";
    }

}

function back() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById("display").innerHTML = display.substring(0, display.length -1);
}

function limpar() {
    document.getElementById("display").innerHTML = "";
}
