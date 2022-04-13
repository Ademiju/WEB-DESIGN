// foreach
// let anArray = [1,2,3,4,5,6,7,8]

// function getEvenNumbers(item,index){
//         if(anArray[index] %2 === 0){
//            anArray[index] = item 
//             console.log(item)
//         }
//     }
// anArray.forEach(getEvenNumbers) 

// let array = [1,2,3,4,5,6,7,8]; array.forEach(value => value % 2 === 0 && process.stdout.write(value + " "))


// printing even number
// (function array(anArray){ for (let i = 0; i < anArray.length;i++) {anArray[i] % 2 === 0 ? console.log( anArray[i]):console.log(" ")}} )([1,2,3,4,5,6,7,8])
// (function oneLine(anArray){ for ( let i = 0; i < anArray.length; i++) { anArray[i] % 2 === 0 && process.stdout.write(anArray[i]+" ")}}) ([1,2,3,4,5,6,7,8])

let pseudo = {
    anArray: [1,2,3,4,5,6,7,8],
    pseudoForEach: function(iterator){
        for(let i = 0; i < this.anArray.length; i++){
            iterator(this.anArray[i])
        }
    }
}
pseudo.pseudoForEach((value)=>{value % 2 === 0 && process.stdout.write(value +" ")})


let psedoDocument = {
    events: {},
    addEventListener: function (event, aFunctoin){
        if(event === "DOMContentLoaded"){
            aFunctoin(this.events)
        }
    }
}
psedoDocument.addEventListener("DOMContentLoaded", function (event){console.log(event)})