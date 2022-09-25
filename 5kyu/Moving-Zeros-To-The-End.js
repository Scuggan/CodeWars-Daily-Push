/* 5kyu
Moving Zeros To The End 

https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    let newArr = arr.filter(x => x !== 0)
    let zeros = arr.filter(x => x === 0)
    return newArr.concat(zeros)
}