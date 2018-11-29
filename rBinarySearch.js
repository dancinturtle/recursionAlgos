// given a sorted array and a value, recursively determine whether the value is found within the array

function rBinarySearch(arr, n, lBounds=0, rBounds=arr.length-1){
    
    
    if(lBounds > rBounds){
        
        return false;
    }
    let idx = Math.ceil((rBounds - lBounds)/2) + lBounds;
    
    if(arr[idx]==n){
        
        return idx;
    }
    if(arr[idx]>n){
        return rBinarySearch(arr, n, lBounds, idx-1);
    }
    if(arr[idx]< n){
        return rBinarySearch(arr, n, idx+1, rBounds);
    }
}


const sortedarray = [-17,-3,2,5,6,7,8,10,13,15,16,17,23,24,26,27,44,49,55,57,58,67,69,70,71,73,75, 77, 78, 79, 80];

console.log(rBinarySearch(sortedarray, 84));