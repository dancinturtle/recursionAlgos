// Given two integers, create rGCF(num1, num2) to recursively determine Greatest Common Factor
// Facts: gcf(a,b) = a if a == b
//  gcf(a, b) = gcf(a-b, b) if a>b
// gcf(a, b) = gcf(a, b-a) if b>a
var count = 0;

function rGCF(a,b){
    console.log("count", count++);
    if(a == b){
        return a;
    }
    if(a > b){
        return rGCF(a-b, b)
    }
    return rGCF(a, b-a);
}

function ritGCF(a, b){
    console.log("count", count++)
    if(a == b){
        return a;
    }
    while(a>b){
        a -= b;
    }
    while(b > a){
        b -= a;
    }
    return ritGCF(a, b);
}


function itGCF(a,b){
    while(a != b){
        if(a > b){
            a -= b;
        }
        else {
            b -= a;
        }
    }
    return a;
}


console.log(itGCF(123456, 987654));



