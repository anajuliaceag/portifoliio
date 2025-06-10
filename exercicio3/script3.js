let pontosFaltando
var nome = window.prompt("Qual é o seu nome?");
var nota1 = Number(window,prompt("Digite aqui a primeira nota:"));
var nota2 = Number(window,prompt("Digite aqui a segunda nota:"));
var nota3 = Number(window,prompt("Digite aqui a terceira nota:"));

let total  = (nota1 + nota2 + nota3 )/ 3;

alert ("Media final: " + total);

 if(total >= 60){
  alert("Você atingiu a media " + total);
  alert("Aprovado!");
 }else{
  pontosFaltando = 60 - total;
  alert("Reprovado faltaram" + pontosFaltando + "pontos");
  alert("Confira esse link para conseguir aprender mais: " + "https://pt.khanacademy.org/");
 }