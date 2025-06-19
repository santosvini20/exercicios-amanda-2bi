function converterParaCelsius() {
    let valor = parseFloat(document.getElementById('inputTemperatura').value);
    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = "Por favor, digite um número válido.";
        return;
    }
    let resultado = (valor - 32) * 5 / 9;
    document.getElementById('resultado').innerText = valor + "°F = " + resultado.toFixed(2) + "°C";
}

function converterParaFahrenheit() {
    let valor = parseFloat(document.getElementById('inputTemperatura').value);
    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = "Por favor, digite um número válido.";
        return;
    }
    let resultado = (valor * 9 / 5) + 32;
    document.getElementById('resultado').innerText = valor + "°C = " + resultado.toFixed(2) + "°F";
}
