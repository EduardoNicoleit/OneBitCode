const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem Vindo(a) ao cadastro de imóveis!\n" +
        "Total de Imóvies: " + imoveis.length +
        "\n\nEscolha uma Opção:\n1. Novo Imóvel\n2. Lista de Imóvies\n.3 Sair"
    )
} while (opcao !== "3")