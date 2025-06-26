let mostraHTML = document.getElementById("mostraHTML");
let verao = ["Janeiro", "Fevereiro", "Março", "Dezembro"];
let outono = ["Abril", "Maio", "Junho"];
let inverno = ["Julho", "Agosto", "Setembro"];
let primavera = ["Outubro", "Novembro"];

function clique(){
    let texto = prompt("Digite um mês; ").toLocaleUpperCase
}

if (verao.includes(mes)) {
    estacao = "Verão";
    document.body.style.backgroundColor = "orange";
} else if (outono.includes(mes)) {
    estacao = "Outono";
    document.body.style.backgroundColor = "brown";
} else if (inverno.includes(mes)) {
    estacao = "Inverno";
    document.body.style.backgroundColor = "ligthblue";
} else if (primavera.includes(mes)) {
    estacao = "Primavera";
    document.body.style.backgroundColor = "pink";

} else {
    estacao = "Mês inválido";
   
}
alert("A estação do mês digitado é: " + estacao);