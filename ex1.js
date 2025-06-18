function divisivelportres() {
    const num = parseInt(document.getElementById('numero').value)
    const msg = num%3 == 0 ? 'É' : 'Não é'
    document.getElementById('resposta').textContent = msg
}