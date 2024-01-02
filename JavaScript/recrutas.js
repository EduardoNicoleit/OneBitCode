const   firstName = prompt("What's your name?")
const   lastName = prompt("What about your Last Name")
const   studyField = prompt("What's your field of study")
const   yearOfBirth = prompt("Year of Birth:")

alert(
    "Thanks for your info!\n" +
    "\nName: " + firstName + " " + lastName +
    "\nStudy Field: " + studyField +
    "\nBirth Date: " + (2024 - yearOfBirth)
)
