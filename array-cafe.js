//find the sum of missing numbers from the array of numbers

function sumMissingNumbers(arr){
    let sum = 0
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    for(let i = min; i <= max; i++){
        if(!arr.includes(i)){
            sum += i
        }
    }
    return sum
}
console.log(sumMissingNumbers([1,3,5,7,10]))
console.log(sumMissingNumbers([10,20,30,40,50,60]))