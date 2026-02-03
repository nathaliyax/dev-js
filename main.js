let fullName = "Nathalia Lima Santos"

console.log(fullName.split(" ")) //espaça

let arrayString = fullName.split(" ")
console.table(arrayString)

let arrayCount = arrayString.length
console.log(arrayCount);

let name = arrayString[0]

let lastName = arrayString[arrayString.length-1]

function WelcomeComParams(name, lastName) {
    
    console.log(`Olá, ${name} ${lastName}`);
    
}
WelcomeComParams(name,lastName)
