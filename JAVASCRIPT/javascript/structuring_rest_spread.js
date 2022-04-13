// DESTRUCTURING
let theCohort ={
    className: "tech_stuff",
    number: 9,
    total: 31,
    isNormal: true
}

let {className} = theCohort
console.log(className)


//SPREAD
let cohort ={
    name: "tech_stuff",
    number: 9,
    total: 31,
    isNormal: true
}
let newCohort = cohort;
newCohort.name = "interesting_stuff"
console.log(newCohort.name)
console.log(cohort.name)

let cohortNew = {...cohort}
cohortNew.name = "cool_stuff"

console.log(newCohort.name)
console.log(cohort.name)
console.log(cohortNew.name)

//REST
function doSomething(...names){
    console.log(names)
}
doSomething("increase","joshua","motunrayo")


function anotherFunction(...names){
    return function(){
        names.forEach((names) => console.log(`hi ${names}`))
    }
}

anotherFunction("increase","joshua","motunrayo")() //call the function passed int0 doSomething

//OR use immediately invoked function expression for the function passed into doSomething

function anotherFunctioncall(...names){
    (function(){
        names.forEach((names) => console.log(`hi ${names}`))
    })()
}
anotherFunctioncall("increase","joshua","motunrayo")

let anArray = [1,2,3,4,5,6]

let newArray = [...anArray]

console.log(newArray)

