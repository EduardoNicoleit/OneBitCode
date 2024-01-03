const medida = prompt("Insira uma medida em metros: ")

const unidade = prompt(
    "Converter para: " + "\n" +
    "\n1. Milimetros (mm)" +
    "\n2. Centimetros (cm)" +
    "\n3. Decimetros (dm)" +
    "\n4. Decâmetros (dam)" +
    "\n5. Hectômetros (hm)" +
    "\n6. Kilometros (km)"
)

switch (unidade) {
    case "1" :
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2" :
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3" :
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4" :
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5" :
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6" :
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break  
    default: 
        alert("Opção Inválida")                    
}