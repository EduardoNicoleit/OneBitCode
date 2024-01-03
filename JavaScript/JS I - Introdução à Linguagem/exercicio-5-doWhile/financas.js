let saldo = prompt("Informe seu Saldo Inicial")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo Disponível: R$ " + saldo + "\n" +
        "\n1. Depositar" +
        "\n2. Sacar" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat( prompt("Informe o valor a ser depositado: "))
            break
        case "2":
            saldo -= parseFloat( prompt("Informe o valor do Saque: "))
            break
        case "3":
            alert("Saindo...")
            break 
        default:
            alert("Entrada Inválida")         
    }

} while (opcao !== "3")