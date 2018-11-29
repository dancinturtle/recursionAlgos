// create strSubsets(str). Return an array with every possible in-order character subset of str.
// The resultant array itself need not be in any specific order, it is the subset of letters in each string that must be in the same order as they were in the original string.
// Given "abc" return array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"]


function strSubsets(str, prefix, arr){
   if(prefix === undefined){
       prefix = "";
       arr = [];
   }
   if(str.length == 0){
       arr.push(prefix);
   }
   for(var i=0; i<=str.length; i++){
       
   }
}