let pessoas = [];
const maxPessoas = 50;

function menu() {
    let opcao;
    do {
        opcao = prompt("Menu:\n1. Cadastrar pessoa\n2. Mostrar dados\n3. Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                cadastrarPessoa();
                break;
            case '2':
                mostrarDados();
                break;
            case '3':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '3');
}

function cadastrarPessoa() {
    if (pessoas.length >= maxPessoas) {
        alert("Número máximo de pessoas cadastradas.");
        return;
    }
    let nome = prompt("Informe o nome:");
    let salarioBruto = parseFloat(prompt("Informe o salário bruto:"));
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        alert("Salário inválido! Tente novamente.");
        return;
    }
    pessoas.push({ nome, salarioBruto });
}

function calcularSalarioLiquido(salarioBruto) {
    return salarioBruto * 0.9; // Descontando 10% de INSS
}

function mostrarDados() {
    if (pessoas.length === 0) {
        alert("Nenhuma pessoa cadastrada.");
        return;
    }
    let mensagem = "Dados das pessoas cadastradas:\n";
    for (let pessoa of pessoas) {
        let salarioLiquido = calcularSalarioLiquido(pessoa.salarioBruto);
        mensagem += `Nome: ${pessoa.nome}, Salário Bruto: R$${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    }
    alert(mensagem);
}

menu();