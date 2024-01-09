/* 7 kyu
Training JS #27: methods of arrayObject---filter()

https://www.codewars.com/kata/573023c81add650b84000429/javascript

Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
*/

function countGrade(scores) {
  return {
    S: scores.filter(e => e == 100).length,
    A: scores.filter(e => e < 100 && e >= 90).length,
    B: scores.filter(e => e < 90 && e >= 80).length,
    C: scores.filter(e => e < 80 && e >= 60).length,
    D: scores.filter(e => e < 60 && e >= 0).length,
    X: scores.filter(e => e == -1).length,
  };
}
