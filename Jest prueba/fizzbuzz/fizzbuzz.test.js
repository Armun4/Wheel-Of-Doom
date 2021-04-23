const fizzbuzz = require ('./fizzbuzz.js')

test('if number is divisible by 3 return fizz', () =>{
//given number % by 3
let number = 3
//when ejecute function
let result = fizzbuzz(number)
//the return fizz
expect (result).toBe('fizz')
})

test ('if number is disible by 5, function return buzz', () =>{
let number = 5
let result = fizzbuzz(number)
expect(result).toBe('buzz')

}



)