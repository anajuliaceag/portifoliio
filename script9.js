let mostraHTML = document.getElementById("mostraHTML");
function estacao(){
    let mes = prompt("Digite um mês: "). toUpperCase()

    console.log(mes);
    if(mes == "JANEIRO"){
        mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é verão!`
    }

}