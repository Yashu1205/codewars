function abbrevName(name){
    const name_arr = name.toUpperCase().split(' ')
    return `${name_arr[0][0]}.${name_arr[1][0]}` 
}
console.log(abbrevName('Sam Harris'))