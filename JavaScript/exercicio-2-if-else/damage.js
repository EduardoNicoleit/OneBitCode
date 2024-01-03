const striker = prompt("Who is the Striker Pokemon")
const attackPower = parseFloat(prompt("What's the Attack Power of " + striker))

const defender = prompt("Who is the defender Pokemon?")
let lifePoints = parseFloat(prompt("How many life points " + defender + " has?"))
const defensePower = parseFloat(prompt("How many Defensive Points " + defender + " has?"))
const shield = prompt("Does " + defender + "has Shield? (Yes/No)")

let damageOutput = 0

if (attackPower > defensePower && shield === "no") {
    damageOutput = attackPower - defensePower
} else if (attackPower > defensePower && shield === "yes") {
    damageOutput = (attackPower - defensePower) / 2
}

lifePoints -= damageOutput

alert(striker + " caused " + damageOutput + " damage on " + defender)
alert(
    striker + "\nAttack Power: " + attackPower +"\n\n" +
    defender + "\nLife Points: " + lifePoints +
    "\nDefense Points: " + defensePower + "\nShields: " + shield
)


