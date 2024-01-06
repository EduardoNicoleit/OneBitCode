const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho " + baralho.length +
        "\n1. Adicionar uma Carta\n2. Puxar uma Carta\n3. Sair"
    )
    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
        case "2":
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Inálida!")            
    }    
} while (opcao !== "3")