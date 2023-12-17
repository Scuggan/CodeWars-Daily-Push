/* 8 kyu 
Is integer safe to use?

https://www.codewars.com/kata/55a4f9afeffe4231090000d6

Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

const SafeInteger = n => Math.abs(n) < Number.MAX_SAFE_INTEGER;
