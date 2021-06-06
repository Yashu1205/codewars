function XO(str) {
    //code here
    let x_count = 0, o_count = 0
    for(let char of str){
        if(char.toLowerCase() === 'x'){
            x_count++
        }
        else if(char.toLowerCase() === 'o'){
            o_count++
        }   
    }
    if(x_count === o_count){
        return true
    }
    else{
        return false
    }
}
console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('ooxXm'))