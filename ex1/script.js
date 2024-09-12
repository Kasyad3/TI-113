
let numeros = listaNumeros();
function listaNumeros() {

    let numeros = [];
    
    for (i = 0; i < 5; i++) {
        let numero
        
        
        do {
            numero = parseFloat(prompt(`Informe o ${i + 1}° número: `));
            
            if (isNaN(numero))
                alert(`Valor inválido, informe um número.`)
            
        } while (isNaN(numero))
            
            numeros.push(numero)
            
        }
        return numeros;
    }

exibirNumeros(numeros);
function exibirNumeros() {
let mensagem = ""
    for (i = 0; i < numeros.length; i++) {

        if (i == numeros.length - 1)
            mensagem += numeros[i] + "."

        else if (i == numeros.length - 2)
            mensagem += numeros[i] + " e "

        else
        mensagem+= numeros[i] + ", "

       

    }
    alert(mensagem);
}