// Given an array of 1s and 0s which has all 1s first followed 
// by all 0s, write a function called countZeroes, which returns 
// the number of zeroes in the array.
function countZeroes(arr) {
  let firstzeroposition = firstzero(arr);
  if (firstzeroposition === -1){
      return 0;
  }
  return arr.length-firstzeroposition;
}

function firstzero(arr ,low = 0, high = arr.length - 1){
    // var low = 0;
    // var high = arr.length-1
    if(high >= low){
        let mid = low + Math.floor((high-low)/2);
        if((mid === 0 || arr[mid-1]===1) && arr[mid] === 0){
            return mid;
        }else if(arr[mid]===1){
            return findFirst(arr, mid+1,high)
        }else{
            return findFirst(arr, low, mid-1)
        }
    }
    return -1;
}
module.exports = countZeroes