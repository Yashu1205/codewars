function nonConsecutive(arr){
    let flag = null
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] + 1 !== arr[i+1]){
            flag = arr[i+1]
            break
        }
    }
    return flag
}
console.log(nonConsecutive([1,2,3,4,5]))
console.log(nonConsecutive([1,2,3,4,5,7]))