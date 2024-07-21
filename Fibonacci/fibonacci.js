// Start with fibonacci series.

// FORMULA = F(n-1) + F(n-2);


// 1. Find Fibonacci using Recursion method. But it can be very slow while processing large inputs.
function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));  // 3
console.log(fibonacci(5));  // 5
console.log(fibonacci(10));  // 55


// 2. Using Memoization to store previous results for future repared same queries.

let memo = {};

function memoi(n){
    
    console.log('Memoisation array:',memo);

    if(memo[n]){
        console.log('If condition is working');
        console.log(memo[n]);
    }else{
        memo[n] = n+10;
        console.log('Else condition is working');
        console.log(memo[n])
    }
}

memoi(5);
memoi(5);
memoi(5);


// 3.Dynamic programming Approach
// This method is really faster than other recursion methods
function fibonacciDP(n) {
    if(n <= 1) {
        return n;
    }

    const fib = [0,1];
    for(i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2]; // this line is game changer
    }
    return fib[n]
}

console.log(fibonacciDP(5));

fib[0] = 0;
fib[1] = 1;
fib[2] = 1;
fib[3] = 2;
fib[4] = 3;
fib[5] = 5;
fib[6] = 8;
fib[7] = 13;
fib[8] = 21;
fib[9] = 34;
fib[10] = 55;



// // Slow recursion example. This recursion is slower than above recursion. Above recursion is faster rate performance.
function sapmle(n){
    if(n==0){
        return 0
    }
    if(n == 1){
        return 1;
    }
    for(i=2; i<=n; i++ ){
        return sapmle(n-1)+sapmle(n-2);
    }
}
console.log(sapmle(12));



// CODEVo
function fibonacci(n) {
    let fib = [0,1];
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib // Only fib, it givesn [ 0, 1, 1, 2 ]
    return fib[n] // if mention position, it gives the value. Position is present, give (i<=n) in loop;
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));



// Good summation example
function summation(n){
    return n*(n+1)/2;
}

console.log(summation(5));
console.log(summation(55));



