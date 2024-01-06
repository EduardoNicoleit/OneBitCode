let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i< fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes: \n" + pacientes +
        "\nEscolha uma ação: \n'. Novo Paciente\n2. Consultar paciente\n3. Sair"
    )

} while(opcao !== "3")