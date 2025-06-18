function verificador() {
    const selecionado = document.querySelector('input[name="habilita"]:checked');
    const resultado = document.getElementById("correto");
    if(selecionado.value== "c") {
        resultado.textContent = "Certa resposta."
    }else {
    resultado.textContent = "Errou";
    }

    
}