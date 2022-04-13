function generateRandomBetweenZeroAndYourRange(yourRange){
   return Math.floor(Math.random() *yourRange) + 1
}
// console.log(generateRandomBetweenZeroAndYourRange(10))

function generateRandomWithinARange(minRange, maxRange){
    return Math.floor(Math.random()*(maxRange - minRange + 1)) +minRange 
}
// console.log(generateRandomWithinARange(5,15))


function changeStr(str){
    return parseInt(str, 2)
}

console.log(changeStr("100"))
