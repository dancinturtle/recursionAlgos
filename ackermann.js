function ackermann(num1, num2){
    if(num1 == 0){
        return num2+1;
    }
    if(num2 == 0){
        return ackermann(num1-1, 1);
    }
    return ackermann(num1-1, ackermann(num1, num2-1));
}

console.log(ackermann(4,1))
