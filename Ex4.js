let numSecreto = Math.floor(Math.random()*20)+1;
function TesteNum() {
    const chute = parseInt(document.getElementById('num').value)
    let result=''
    if (chute==numSecreto) {
       result="Você acertou!"
    } else if (chute>numSecreto) {
        result="É menor!"
    } else {
        result="É maior!"
    }
    document.getElementById('resultado').textContent = result
}