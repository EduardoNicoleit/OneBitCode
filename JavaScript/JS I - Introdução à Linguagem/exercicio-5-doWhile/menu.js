let option = ""

do {
    option = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma das opções abaixo" +
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar"
    )

switch(option){
    case "1":
        alert("Você escolheu a Opção 1")
        break
    case "2":
        alert("Você escolheu a Opção 2")
        break 
    case "1":
        alert("Você escolheu a Opção 3")
        break
    case "1":
        alert("Você escolheu a Opção 5")
        break
    case "1":
        alert("Você escolheu ecncerrar.")
        alert("Encerrando...")
        break
    default:
        alert("Opção Invalida!")            

}
        
} while (option !== "5")