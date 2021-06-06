function multiTable(number){
    let table = ''
  for(let i =1; i <= 10; i++){
    table += i!= 10 ? `${i} * ${number} = ${i*number}\n` : `${i} * ${number} = ${i*number}`
  }
  return table
}
console.log(multiTable(5))