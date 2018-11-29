// from the tree we make, we can see that each time we call the function, we want to remove one letter from the original string and add it to the prefix
// we want to do this with every single letter in the string, meaning that we need to do a loop, taking out each letter and adding it to prefix
// when the string is empty, we know to push prefix into the array
// so each function call should receive string, prefix, and arr, set prefix to "" and arr to [] if it's undefined, meaning this is the call the user is making


function anaagain(string, prefix = "", arr = []){
  if(string.length == 0){
    arr.push(prefix);
  }
  for(var i=0; i<string.length; i++){
    var newstring = createsubstring(string, i);
    anaagain(newstring, prefix + string[i], arr);
  }
  return arr;
}

console.log(anaagain("abcd").length);

function createsubstring(string, n){
  var newstring = "";
  for(var i=0; i<string.length; i++){
    if(i!=n){
      newstring += string[i];
    }
  }
  return newstring
}
function getAnagrams(string, prefix, arr){
  var strlen = string.length;
  if(prefix === undefined){
    var prefix = "";
  }
  if(arr === undefined){
    var arr = [];
  }
  if(strlen == 0){
    arr.push(prefix);
  }
  for(var i=0; i<strlen; i++){
	
    getAnagrams(string.substring(0, i) + string.substring(i+1, strlen), prefix + string[i], arr);
  }
  return arr;
}

var originalString = "abc";
// console.log(getAnagrams(originalString));

function ana(string, prefix = "", arr = []){
	console.log("our prefix", prefix, arr)
	 var strlen = string.length;
	 if(strlen == 0){
    arr.push(prefix);
  }
  for(var i=0; i<strlen; i++){
	
    ana(string.substring(0, i) + string.substring(i+1, strlen), prefix + string[i], arr);
  }
  return arr;

}

// console.log(ana(originalString))

// function anagram(str, remainder, arr){
// 	var strlen = str.length;
// 	if(arr === undefined){
// 		arr = [];
// 	}
// 	console.log("Remainder", remainder)
// 	if(remainder === undefined){
// 		remainder = "";
// 	}
// 	if(strlen == 0){
// 		arr.push(remainder);
// 	}
	
// 	for(var i=0; i<strlen; i++){
// 		var memo = str.substring(0, i) + str.substring(i+1, strlen);
// 		console.log("Memo", memo);
// 		anagram(memo, remainder + str[i], arr);
// 	}

// 	return {array:arr, length: arr.length};
// }

// console.log(anagram("abc"));

