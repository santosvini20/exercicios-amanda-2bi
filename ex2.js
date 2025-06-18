function multiplicadores() {
    const num = parseInt(document.getElementById('numero').value)
    const msg1 = num*1
    document.getElementById('resposta').textContent = `O numero vezes 1 é: ${msg1}`
    const msg2 = num*2
    document.getElementById('resposta2').textContent = `O numero vezes 2 é: ${msg2}`
    const msg3 = num*3
    document.getElementById('resposta3').textContent = `O numero vezes 3 é: ${msg3}`
    const msg4 = num*4
    document.getElementById('resposta4').textContent = `O numero vezes 4 é: ${msg4}`
    const msg5 = num*5
    document.getElementById('resposta5').textContent = `O numero vezes 5 é: ${msg5}`
}