// const binaryArrayToNumber = arr => {
//     // let num = 0
//     // const narr = arr.reverse() 
//     // for(let i = 0; i < arr.length; i++){
//     //     if(narr[i] == 0){
//     //         num += 0
//     //     }
//     //     else{
//     //         num += Math.pow(2,i)
//     //     }
      
//     // }
//     return num
//   };
  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
  console.log(binaryArrayToNumber([0,0,0,1]))
  console.log(binaryArrayToNumber([0,0,1,0]))
  console.log(binaryArrayToNumber([0,1,0,1]))