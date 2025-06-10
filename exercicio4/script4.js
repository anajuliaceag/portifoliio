let inscritos = 0;
let equipes = 0;

function calcular(){
    inscritos +=1;
    equipes = parseInt(inscritos / 3);
    alert("Número de inscritos: " + inscritos + "Equipes: " + equipes);

    if(equipes >= 4){
        alert("Número de inscritos: " + inscritos + "Número de equipes: " + equipes);
    }
}