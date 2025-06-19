let campo = document.getElementById('campoTexto');
let mensagem = document.getElementById('mensagem');

campo.addEventListener('keydown', function(evento) {
    mensagem.innerText = "Você pressionou: " + evento.key;
});
