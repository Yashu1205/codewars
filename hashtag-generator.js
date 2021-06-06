function generateHashtag (str) {
    const arr = str.split(' ').filter(ele => ele !== '')
    let result = []
    if(arr.length > 0){
      result = arr.map(ele => {
        return ele[0].toUpperCase() + ele.trim().slice(1,ele.length + 1)
      })
      result.unshift('#')
    }
    
    if(arr.length == 0 || result.join('').length > 140 || str === ''){
       return false      
     }
    else{      
      return result.join('')
    }
    
  }

// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
    
//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }
  console.log(generateHashtag('Codewars is nice'))
  console.log(generateHashtag(''))
  console.log(generateHashtag('     '))
  console.log(generateHashtag('Do We    Have A Hashtag'))