function solve(arr){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const result = []
    for(let item of arr){
        let count = 0
        for(let i =0; i < item.length; i++){
            if(i == alphabets.indexOf(item[i].toLowerCase())){
                count++                
            }        
        }
        result.push(count)
    }
    return result
}
console.log(solve(["abode","ABc","xyzD"]))
// console.log(solve([]))
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))