// You are given a string containing chars '0', '1', and '?'. For every '?', either '0' or '1' can be substituted. Write a recursive function to return array of all valid strings with '?' chars expanded to '0' or '1'.

function rbin(str, arr=[], i=0){
    while(str[i] != "?" && i<str.length){
        i++;
    }
    if(i<str.length){
        var str1 = str.substring(0,i) + '0' + str.substring(i+1, str.length);
        var str2 = str.substring(0,i) + '1' + str.substring(i+1, str.length);
        rbin(str1, arr, i);
        rbin(str2, arr, i);
    }
    else{
        arr.push(str);
    }
    return arr;
}

var test = "?010???"

console.log(rbin(test));