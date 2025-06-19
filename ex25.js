let contador = 0;

const botao = document.getElementById('botao');
const contadorSpan = document.getElementById('contador');

botao.addEventListener('click', () => {
    contador++;
    contadorSpan.textContent = contador;
});

botao.addEventListener('dblclick', () => {
    contador = 0;
    contadorSpan.textContent = contador;
});


// Exemplo de HTML para testar o código