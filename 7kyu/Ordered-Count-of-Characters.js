/*7 kyu
Ordered Count of Characters

https://www.codewars.com/kata/57a6633153ba33189e000074/javascript

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1],
*/

const orderedCount = function (text) {
    let result = [];
    [...new Set(text)].forEach(e => {
        result.push([e, [...text].filter(x => x === e).length]);
    })
    return result;
}