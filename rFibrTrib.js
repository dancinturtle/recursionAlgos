function rfib(n){
    n=Math.trunc(n);
    if(n<=0){
        return 0;
    }
   
    if(n==1){
        return 1;
    }
  
    if(n>1){
       
        return(rfib(n-1) + rfib(n-2))
    }
    
}

console.log(rfib(7));


function rTrib(n){
    n=Math.trunc(n);
    if(n<=1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    if(n>2){
        return rTrib(n-1) + rTrib(n-2) + rTrib(n-3);
    }

}
// console.log(rTrib(10))

// 0 1 2 3 4 5 6  7 8  9  10  11 
// 0 0 1 1 2 4 7 13 24 44 81 149 

