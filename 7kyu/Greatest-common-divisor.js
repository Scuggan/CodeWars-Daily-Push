/* 7 kyu
Greatest common divisor

https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/javascript

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x, y) {
    let min = Math.min(x, y);
    let max = Math.max(x, y);
    for (let i = min; i > 0; i--) {
        if (min % i === 0 && max % i === 0) return i;
    }
}