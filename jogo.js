numero = 0
let aleatorio = Math.floor(Math.random() * 10 + 1);

console.log("Adivinhe o numero ou digite 'sair' para sair: ");
process.stdin.on('data', function (data){
    if(data.toString().trim() === "sair"){
        console.log("Você desistiu, o numero era: " + aleatorio)
    }
    num = Number(data.toString().trim())
    if(+ num === aleatorio) {
        console.log("Você acertou, parabéns!" ) 
    }
    else {
        console.log("Você errou, tente novamente ou digite para 'sair'. "  )
    }
});

