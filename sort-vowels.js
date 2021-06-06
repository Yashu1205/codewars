function sortVowels(s){
    const vowels = 'aeiou'
    let result = ''
    if(typeof s === 'string'){
        for(let i =0; i < s.length; i++){
            result += vowels.includes(s[i].toLowerCase()) ? `|${s[i]}` : `${s[i]}|`
            if(i < s.length - 1){
                result += '\n'
            }
        }
        return result      
    }
    else {
        return ''
    }     
  }

//   console.log(sortVowels('codewars'))
  console.log(sortVowels('Rnd TesT'))
  console.log(sortVowels(null))
  console.log(sortVowels(1337))