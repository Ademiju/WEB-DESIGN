// let myName = "lotachi"

// function changeName(personName, name){
//     personName = name
//     console.log(personName)
// }
// changeName(myName,"rotachi")
// console.log(myName)

// function changeNameB(){
//     myName = "rotachi"
// }

// changeNameB()
// console.log(myName)

// changeName(myName,"lotachi")
// console.log(myName)

// const multiplier = (number) => {
//     for(let i = 0; i < 12; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
//     }
// }

// function doArithmetic(aFunction){
//     let x = 2
//     aFunction(x)
// }

// doArithmetic(multiplier)

// doArithmetic((element) => {
//     for( let i = 0; i < 12; i++){
//         i >= element ? console.log(`${element} / ${i} = ${i / element}`): console.log(i)
//     }

// })

// const drinkWater = function () {
//     console.log("drink water")
// }
// const drinkWater2 = () => {
//     console.log("drink water 2")
// }

// // A function that returns a function

// const cookFood = function(){
//     return(food) => {
//         return food
//     }
// }

//A function that takes a function and returns a function

// const returnFunction = (aFunction) => {
//     return aFunction
// }
// const AnotherFunction = returnFunction(() => console.log("Ekaabo"))

// AnotherFunction()

// const togggleLight = (event, callMeBack) => {
//     switch (event) {
//         case "walkedIn":
//             callMeBack("Switch On")
//             break;
//     case "walkedOut":
//             callMeBack("Switch Off")
//         break;
//     default:
//             console.log("Lights off")
//             break;
//     }
// }

// togggleLight("walkedIn", (data) => console.log(`lights are ${data}`))
// togggleLight("walkedOut",(data) => console.log(`lights are ${data}`))
// togggleLight("walkedOnWater",(data) => console.log(`lights are ${data}`))


// const togggleLight = (event, callMeBack) => {
//     switch (event) {
//         case 1:
//             callMeBack(58 + 3)
//             break;
//     case 2:
//             callMeBack(58 + 5)
//         break;
//     default:
//             console.log(58)
//             break;
//     }
// }

// togggleLight(1, (data) => console.log(`lights are ${data}`))
// togggleLight(2,(data) => console.log(`lights are ${data}`))
// togggleLight(50,(data) => console.log(`lights are ${data}`))


let userName = "toolu"

function changeName(name){
    name = "Bimbo"
}
changeName(userName)
console.log(userName)

function movement(person){
    console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
}

function animation(defineCharacterMovement){
    let character = {
        name: "adeola",
        isWig: true,
        gender: "female"
    }
    defineCharacterMovement(character)
}
animation(movement)

function createCharacter(){
    let character = {
        name: "adeola",
        isWig: true,
        gender: "female",
        getName: function(){
            return this.name
        }
    }
    return character
}
let person = createCharacter()
let personName = person.getName()
console.log(personName)