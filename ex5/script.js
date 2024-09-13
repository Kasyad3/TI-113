/*
let numeros = [];

function menu() {
    let opcao;
    do {
        opcao = prompt("Menu:\n1. Cadastrar 5 números\n2. Cadastrar 15 números\n3. Cadastrar 25 números\n4. Cadastrar 50 números\n5. Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                cadastrarNumeros(5);
                break;
            case '2':
                cadastrarNumeros(15);
                break;
            case '3':
                cadastrarNumeros(25);
                break;
            case '4':
                cadastrarNumeros(50);
                break;
            case '5':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '5');
}

function cadastrarNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero;
        do {
            numero = prompt(`Informe o ${i + 1}° número inteiro:`);
            if (numero === null || numero.trim() === "" || isNaN(numero) || parseInt(numero) < 0) {
                alert("Entrada inválida! Informe um número inteiro positivo.");
            } else {
                numero = parseInt(numero);
                numeros.push(numero);
                break;
            }
        } while (true);
    }
    alert(`Você cadastrou ${quantidade} números com sucesso!`);
}

menu();
*/
let numeros = [];

function menu() {
    let opcao;
    do {
        opcao = prompt("Menu:\n1. Cadastrar 5 números\n2. Cadastrar 15 números\n3. Cadastrar 25 números\n4. Cadastrar 50 números\n5. Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                cadastrarNumeros(5);
                break;
            case '2':
                cadastrarNumeros(15);
                break;
            case '3':
                cadastrarNumeros(25);
                break;
            case '4':
                cadastrarNumeros(50);
                break;
            case '5':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '5');
}

function cadastrarNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero;
        do {
            numero = prompt(`Informe o ${i + 1}° número inteiro:`);
            if (numero === null || numero.trim() === "" || isNaN(numero) || parseInt(numero) < 0) {
                alert("Entrada inválida! Informe um número inteiro positivo.");
            } else {
                numero = parseInt(numero);
                numeros.push(numero);
                break;
            }
        } while (true);
    }
    alert(`Você cadastrou ${quantidade} números com sucesso!`);
    menuExibir();
}

function menuExibir() {
    let opcao;
    do {
        opcao = prompt("Menu de Exibição:\n1. Exibir lista completa\n2. Exibir somente números pares\n3. Exibir somente números ímpares\n4. Voltar ao menu principal\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                exibirListaCompleta();
                break;
            case '2':
                exibirPares();
                break;
            case '3':
                exibirImpares();
                break;
            case '4':
                menu();
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '4');
}

function exibirListaCompleta() {
    alert("Lista completa: " + numeros.join(", "));
}

function exibirPares() {
    let pares = numeros.filter(numero => numero % 2 === 0);
    alert("Números pares: " + pares.join(", "));
}

function exibirImpares() {
    let impares = numeros.filter(numero => numero % 2 !== 0);
    alert("Números ímpares: " + impares.join(", "));
}

menu();