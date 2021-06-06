//Format a string of names like 'Bart, Lisa & Maggie'.
// function list(names){
//     const result = names.map(ele =>  ele.name )
//     let last = result.pop()
//     return result.length > 1 ? `${result.join(', ')} & ${last}` : last || ''
//     // if(result.length > 1){
//     //     const str = result.splice(0, result.length-1)
//     //     return 
//     // }
//     // else{
//     // return result[0] !== undefined ? result[0] : ''
//     // }
// }   
//   console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))

function repeatStr (n, s) {
    let result = ''
    for(let i= 1; i<=n; i++){
      result += `${s}`
    }
    return result;
  }
  console.log(repeatStr(3,'*'))


  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]