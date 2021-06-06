function descendingOrder(n){
    const arr = String(n).split('')
    for(let i = 0; i < arr.length; i++){
        let temp = Number(arr[i])
        for(let j = i + 1; j < arr.length; j++){
            if(temp > Number(arr[j])){
                temp = Number(arr[j])
                arr[j] = Number(arr[i])
                arr[i] = temp
            }
        }
    }
    return arr.reverse().join('')
}
console.log(descendingOrder(123456789))
console.log(descendingOrder(145263))