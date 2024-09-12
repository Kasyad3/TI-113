/*
let mensagem = "";

Letras = pedirLetras()
function pedirLetras() {
    let Letras = [];

    for (i = 0; i < 10; i++) {

        let lerLetras = 0

        // Lê 10 letras do usuário
        lerLetras = prompt(`Informe a ${i + 1}° letra: `).toUpperCase()
        Letras.push(lerLetras)

    }
    return Letras;
}

let {vogais, consoantes} = separarLetra(Letras)
function separarLetra() {

    let vogais = []
    let consoantes = []

    for (j = 0; j < Letras.length; j++) {

        if (Letras[i] == "A" || "E" || "I" || "O" || "U")
            vogais.push(Letras[i])

        else
            consoantes.push(Letras[i]);
    }


    return { vogais, consoantes };

}

exibirLetras(vogais , consoantes)
function exibirLetras() {

    let mensagem = ""

    for (h = 0; h < 10; h++) {

        mensagem += `quantidade de vogais: ${vogais.length} \n consoantes: ${consoantes[i]}`
    }
    alert(mensagem)



}

exibirLetras()
*/

let mensagem = "";

let Letras = pedirLetras();
function pedirLetras() {
    let Letras = [];

    for (let i = 0; i < 10; i++) {
        let lerLetras = prompt(`Informe a ${i + 1}° letra: `).toUpperCase();
        Letras.push(lerLetras);
    }
    return Letras;
}

let { vogais, consoantes } = separarLetra(Letras);
function separarLetra(Letras) {
    let vogais = [];
    let consoantes = [];

    for (let j = 0; j < Letras.length; j++) {
        if (Letras[j] === "A" || Letras[j] === "E" || Letras[j] === "I" || Letras[j] === "O" || Letras[j] === "U") {
            vogais.push(Letras[j]);
        } else {
            consoantes.push(Letras[j]);
        }
    }
    return { vogais, consoantes };
}

exibirLetras(vogais, consoantes);
function exibirLetras(vogais, consoantes) {
    let mensagem = `Quantidade de vogais: ${vogais.length}\nConsoantes: ${consoantes.join(", ")}`;
    alert(mensagem);
}
