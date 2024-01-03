const car1 = prompt("What's the name of the First Car?")
const velocity1 = parseFloat(prompt("What's the velocity of the First Car?"))

const car2 = prompt("What's the name of the Second Car?")
const velocity2 = parseFloat(prompt("What's the velocity of the Second Car?"))

 if (velocity1 > velocity2) {
    alert(car1 + " is faster than " + car2)    
 } else if (velocity2 > velocity1) {
    alert(car2 + " is faster than " + car1)
 } else {
    alert(car1 + " and " + car2 + " have the same speed!")
 }