let notas = listaNotas();

function listaNotas() {
    
    let notas = [];
    
    for (i = 0; i < 4; i++) {
        let nota
        
        do {
            nota = parseFloat(prompt(`Informe a ${i + 1}° nota: `));
            
            if (isNaN(nota))
                alert(`Valor inválido, informe um número.`);
            
        } while (isNaN(nota))
            
            notas.push(nota)
            
            
        }
        return notas;
    }
    

calMedia(notas);
function calMedia () {
media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

return media;
}

exibirNotas(notas)
function exibirNotas() {
    let mensagem = ""
    for (i = 0; i < notas.length; i++) {

        if (i == notas.length - 1)
            mensagem += notas[i] + `. \n Média: ${media} .`

        else if (i == notas.length - 2)
            mensagem += notas[i] + " e "

        else
            mensagem += notas[i] + ", "



    }
    alert(mensagem)
}