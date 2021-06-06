function loveFunc(flower1, flower2){
    if((flower1 % 2 == 0 && flower2 % 2 == 1) || (flower2 % 2 == 0 && flower1 % 2 == 1 )){
        return true
    }
    else{
        return false
    }

}
console.log(loveFunc(1,4)) //true
console.log(loveFunc(2,2)) //false