/* 8 kyu
Draw stairs

https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/javascript

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

function drawStairs(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push('I'.padStart(i + 1, ' '));
  }
  return result.join('\n');
}
