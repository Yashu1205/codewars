function evenLast(numbers) {
    let sum = 0
    numbers.forEach((ele, index) => {
      sum += index % 2 == 0 ? ele * numbers[numbers.length - 1] : 0
    })
    return sum
  }
  console.log(evenLast([2, 3, 4, 5])) //30