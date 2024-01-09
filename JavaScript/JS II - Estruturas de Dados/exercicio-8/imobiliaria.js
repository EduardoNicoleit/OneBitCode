const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem Vindo(a) ao cadastro de imóveis!\n" +
        "Total de Imóvies: " + imoveis.length +
        "\n\nEscolha uma Opção:\n1. Novo Imóvel\n2. Lista de Imóvies\n3. Sair"
    )

    switch (opcao) {
        case "1":
        case "2":
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")                
    }    
} while (opcao !== "3")