// Write a function called findRotationCount which accepts an array 
// of distinct numbers sorted in increasing order. The array has been 
// rotated counter-clockwise n number of times. Given such an array, 
// find the value of n.
function findRotationCount(arr, low=0, high=arr.length-1) {
  let mid=Math.floor((high-low)/2);
  if(high<low){
      return 0;
  }
  if(high===low){
      return low;
  }
  
  // Check if element (mid+1) is minimum element. [3, 4, 5, 1, 2]
  if (mid < high && arr[mid + 1] < arr[mid])
    return mid + 1;

  // Check if mid itself is minimum element
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  // Decide whether we need to go to left half or right half
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);


}

module.exports = findRotationCount