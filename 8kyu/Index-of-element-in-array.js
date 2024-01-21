/* 8 kyu
Be Concise IV - Index of an element in an array

https://www.codewars.com/kata/5703c093022cd1aae90012c9/javascript

Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
*/

let find = (a, e) => (a.indexOf(e) >= 0 ? a.indexOf(e) : 'Not found');
