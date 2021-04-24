// Write a function called findFloor which accepts a sorted 
// array and a value x, and returns the floor of x in the 
// array. The floor of x in an array is the largest element 
// in the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.

function findFloor(arr, num, low=0, high = arr.length-1) {
    let mid = Math.floor((high+low)/2);

     if(low>high){
      return -1;
     }

     if(num >= arr[high]){
      return arr[high];
     }

     if(num === arr[mid]){
         return arr[mid];
     }

     if(num < arr[mid]){
         return findFloor(arr,num, low, mid-1);
     }

//what does this means?
     if(num > 0 && arr[mid-1]<=num && num<arr[mid]){
         return arr[mid-1];
     }
     return findFloor(arr, num, mid+1, high);
}

module.exports = findFloor