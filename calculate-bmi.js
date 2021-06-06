function calculateBmi(weight, height){
    const  bmi = weight/(height * height)
    return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese'
} 
console.log(calculateBmi(90, 1.80))