/* 7 kyu
Summing a number's digits

DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
    let positive = Math.abs(number)
    let arr = positive.toString().split('').map(e => Number(e)).reduce((a, b) => a + b)
    return arr
}