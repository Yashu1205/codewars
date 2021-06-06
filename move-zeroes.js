// var moveZeros = function (arr) {
//   const result = []
//   let count = 0
//     for(let item of arr){
//       item === 0 ? count++ : result.push(item)
//     }
//     for(let i = 1; i <= count; i++ ){
//       result.push(0)
//     }
//     return result
//   }
  // console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))

  // var moveZeros = function (arr) {
  //   for(var i = arr.length - 1; i >= 0; i--) {
  //     if(arr[i] === 0) {
  //       arr.splice(i, 1);
  //       arr.push(0);
  //     }
  //   }
  //   return arr;
  // }
  // console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))

//   function largestPairSum(numbers)
// {
//   const max_item = Math.max(...numbers)
//   numbers.splice(numbers.indexOf(max_item),1)
//   return max_item + Math.max(...numbers)
// }

// console.log(largestPairSum([10, 14, 2, 23, 19]))

// function solution(str, ending){
//   const end_length = ending.length
//   return str.slice(str.length - end_length, str.length) === ending ? true : false
// }

// console.log(solution('abcde','abc'))

// function smallEnough(a,limit){
//    return a.every(function(ele){
//       return ele <= limit 
//     })   
// }
// console.log(smallEnough([66, 101], 50))

//How green is my valley

// function makeValley(arr){
//   const bottom = arr.length %2 === 0 ? arr[arr.length/2 ] : (arr[Math.floor(arr.length/2)])
  
//   console.log(bottom)
// }
// makeValley([79, 34, 54, 19, 35, 25])
// makeValley([67, 93, 67, -16, 65, 92, 97])
// makeValley([66, 55, 100, 68, 46, -82, 12, 72, 12, 38])
// makeValley([14,14,14,14,7,14])
// events , notes,
// live session, new lectures
// any challenges

function switcher(x){
  const alphabets = 'zyxwvutsrqponmlkjihgfedcba!?'
  // let result = ''
  // for(let item of x){
  //   console.log(item + 1)
  //   result +=  item < 29 ? alphabets[NUitem]   :  ' '
  // }
  return x.map(ele => alphabets[Number(ele) - 1]).join('')
  // console.log(result)
//  return result
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))

// function firstNonRepeatingLetter(s) {
//   const arr = s.split('')

//   const result  = arr.find((char,index) => {
//     console.log('char',char)
//     const str= arr.splice(index,1)
//     console.log('slice',str)
//      return str.includes(char) ? '' : char
//   })
//   // console.log(result)
// }
// console.log(firstNonRepeatingLetter('moonmen'))

// function sumStrings(a,b) {
//   a = a !== '' ? parseFloat(a) : ''
//   b = b !== '' ? parseFloat(b) : ''  
//   return String(Number(a) + Number(b) )
// }

// console.log(sumStrings('712569312664357328695','81008240453032696'))
// console.log(sumStrings('','5'))


//Disemvowel Trolls : remove vowels from string
// function disemvowel(str) {
//   const arr = str.split('')
//   const vowels = 'aeiou'
//   const result = arr.filter((ele) => {
//     return !vowels.includes(ele.toLowerCase())
//   })
//   return result.join('');
// }

// console.log(disemvowel("This website is for losers LOL!"))
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

// function solution(value){
//   let str = String(value)
//   if(str.length < 5){
//     for(let i = 0; i < str.length; i++){
//       str[i] += '0'
//     }
//   } 
//   return `Value is ${str}`
// }

// console.log(solution(5))

function solve(arr){
  const alphabets = ' abcdefghijklmnopqrstuvwxyz'
  const result = []
  console.log(arr)
  for(let item of arr){
      let count = 0
      for(let char of item){
          if(item.indexOf(char)+1 === alphabets.indexOf(char)){
              count++
          }        
      }
      result.push(count)
  }

  return result
}
console.log(solve(["abode"]))
console.log(solve(["thedefgh","xyzDEFghijabc"]))