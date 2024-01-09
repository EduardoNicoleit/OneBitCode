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
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O Imóvel possui garagem? (Sim/Não")

            const confirm = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem
            )

            if (confirm) {
                imoveis.push(imovel)
            }

            break            
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert (
                    "Imovel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[1].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")                
    }    
} while (opcao !== "3")