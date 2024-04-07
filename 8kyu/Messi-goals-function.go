/* 8 kyu
Grasshopper - Messi goals function

https://www.codewars.com/kata/55f73be6e12baaa5900000d4/go

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

package kata

func Goals(laLiga, copaDelRey, championsLeague int) int {
	return laLiga + copaDelRey + championsLeague
}
