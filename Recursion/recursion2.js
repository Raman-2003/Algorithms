/* 
Recursion is a function that calls itself until it met a certain condition.

Every recursion needs a base case, which is a condition to terminate certain cases.

If we don't have a base case, it will going infinite loop, which might crash our program  


*****************************
if(n === 0){
    return 0;
}
if(n === 1) {
    return 1;
}

But we can easy up this steps

if( n < 2) {
    return n;
}
*****************************


Recursion stores elements as an array. So, We need to count elements from "count zero"

*/

function recursiveFibonacci(n){
   if(n < 2) {
    return n;
   }
    let fib = [0,1];
    for (i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
   return fib[n];
}

console.log(recursiveFibonacci(6));


function recursiveFactorial(n){
    if(n===0){
        return 1;
    }

    return n*recursiveFactorial(n-1);
}
console.log(recursiveFactorial(5));

// Big O = O(n). Because, n increases, the times of execution also increases.
