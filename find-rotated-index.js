// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/298978/JS-binary-search-solution
// https://blog.csdn.net/csdnzhwk/article/details/100660046
// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/874284/Easy-O(log(n))-JS-Solution

/*best solution!!!
https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/874284/Easy-O(log(n))-JS-Solution
Idea - Binary Search:

One thing to remember is that we will always have two sorted subarrays. If the median is greater than the last value of the window, we are in the first subarray, 
else we are in the second subarray. The first subarray's values are always greater than the second subarray's values. 

1. If the median is less than num: 
if we are in the first subarray, we search right half.
if we are in the second subarray, we compare the num and the last value of the window,
and if num is greater we search the left half, else we search the right half.

2. If the median is greater than num:
if we are in the first subarray, we compare the num and the first value of the window,
and if num is less we search the right half, else we search the left half.
if we are in the second subarray, we search left half.
*/

function indRotatedIndex (arr, num) {
    let low = 0, high = arr.length-1, mid;
    while (low <= high) {
        let mid = Math.floor((low+high) / 2);
        if (arr[mid] == num) return mid;
        else if (arr[mid] < num) { 
            if (arr[mid] > arr[high]) low = mid+1;
            else if (num > arr[high]) high = mid-1;
            else low = mid+1;
        } else { 
            if (arr[mid] < arr[high]) high = mid-1;
            else if (num < arr[low]) low = mid+1;
            else high = mid-1;
        }
    }
    return -1;

    // Time Complexity: O(log(n))
    // Space Complexity: O(1)
};


module.exports = findRotatedIndex
