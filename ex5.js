function media(){
nota = parseFloat(document.formulario.nota.value);
nota2 = parseFloat(document.formulario.nota2.value);
nota3 = parseFloat(document.formulario.nota3.value);
nota4 = parseFloat(document.formulario.nota4.value);
div=4;
resultado = (nota+nota2+nota3+nota4)/(div);
resultado = resultado.toFixed(2)
AouR = resultado>=6 ? 'Aprovado' : 'Reprovado'
alert("Você esta: "+AouR);
}