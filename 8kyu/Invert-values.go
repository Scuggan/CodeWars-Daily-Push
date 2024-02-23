/* 8 kyu
Invert values

https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/go

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

package kata

func Invert(arr []int) []int {
	result := make([]int, len(arr))

	for i, num := range arr {
		result[i] = -num
	}

	return result
}
