function imc() {
    let nome = document.getElementById('nome').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value; // Adicionei altura
    let resultado = document.getElementById('resultado');

    if (peso && altura) { // Verifica se os valores estão preenchidos
        let imc = peso / (altura * altura);

        let classificacao = ''
        if(imc < 18){
            classificacao = 'Abaixo do peso'
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e voce esta ${classificacao}`;
        } else if(imc > 24){
            classificacao = 'Gordo'
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e voce é ${classificacao}`;
        }
    } else {
        resultado.textContent = "Preencha todos os campos corretamente!";
    }
}