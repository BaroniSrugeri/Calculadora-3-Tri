function calcularImc(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    console.log(altura);
    console.log(peso);

    var imc = peso / (altura) **2

    if(imc < 18){
        window.alert("Abaixo do peso!");
    } else if(imc = 25){
        window.alert("IMC está normal!");
    } else if(imc < 30){
        window.alert("Sobrepeso");
    }
}