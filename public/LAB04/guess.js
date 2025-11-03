// gera um numero aleatorio entre 0 e 99
let randomNumber = Math.floor(Math.random() * 99) + 1;
// obtem referencias dos elementos html que precisamos
let guessInput = document.getElementById('guessInput');
let guessButton = document.getElementById('guessButton');
let result = document.getElementById('result')

// Define uma funcao que sera executada quando o botao adivinhar for clicado

guessButton.addEventListener('click', function(){
    //obtem o valor do input do usuario e converte para um numero
    let guess = parseInt(guessInput.value);

    //verifica se o valor eh um numero valido
    if(isNaN(guess)){
        result.innerHTML = 'Por favor, insira um numero valido!';
        return;
    }
    //verifica se o numero eh maior, menor ou igual ao numero aleatorio
    if(guess<randomNumber){
        result.innerHTML = 'O numero é maior';
        document.getElementById("result").style.setProperty("background-color", "red");    }
    else if(guess>randomNumber){
        result.innerHTML = 'O numero é menor';
        document.getElementById("result").style.setProperty("background-color", "red");    }
    else{
        result.innerHTML = 'Parabens, você acertou!';
        document.getElementById("result").style.setProperty("background-color", "green");    }
})