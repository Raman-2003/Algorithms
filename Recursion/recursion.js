// let's see Recursion and their problems



// method:1 Using recursion
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }  // This is a base case. Everytime we do recursion, we should give the 'base case' like this.

    return n*factorial(n-1);  // this is the one kind of way to find the recursion value of a number
}

console.log(factorial(5));
console.log(factorial(10));



// method:2 Using a for loop
// This is another kind of way to find out recursion value of a number. Don't get forget to give "i<=n"
function loopRecursion(n){
    if(n===0 || n===1){
        return 1;
    }  // Base case line

    let result = 1;
    for (i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

console.log(loopRecursion(5));

// Here we note that, there are 2 examples for Recursion. First one is follows by O(1)=> Constant time complexity. Don't carre about input.
// Second one is O(n) => means Linear time complexity. If the input size increase, It takes time depend on input size.



/*

Formula = Recursion = n * recursion(n-1);

Definition = Factorial is a non-negative number. Denoted by n! (n exclamatory). 
             is the product of all positive numbers less than or equal to n.
             
Faactorial of Zero is 1.

factorial(4) = 4*3*2*1 = 24.
factorial(5) = 5*4*3*2*1 = 120.

*/


// Find a Prime number or not. Using normal method
function prime(n) {
    if(n < 2) {
        return false;  // If it's true, n is may be 0, 1 or negative numbers
    }

    for (i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(2));
console.log(prime(3));
console.log(prime(4));
console.log(prime(5));



// Using Math.sqrt()
function prime(n){
    if(n < 2) {
        return 1;
    }

    for (i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(12));
console.log(Math.sqrt(100));


// Above exampl is very effcient and do not follow linear time complexity.
// Consider, n = 100, It needs to be check up to 10.
// Consider, n = 10,000, It needs to be check up to 100. Within 100 times get looped, It will be found that is prime or not.
// I say, this is not a LinEAR O(n). But it is also not O(1). It is O(sqrt (n)). 
//  So, As the size of "n" increases, the number of times thr for loop statement executes increases, but not in the same proportion.


// Power of 2

// Consider number is divided by 2, Until It will reach 1, it does not meet with remainder 1, say it is Power of Two. eg:8
// Consider number is divided by 2, Until it will reach 1, in between any toll gate, It got 1 as remainder, it is not a Power of Two. eg:5 


// An excellent example about Power of Two
function isPowerOfTwo(n){
        if(n < 1){
            return false;
        }
        while(n > 1){
            if(n%2 !== 0){
                return false;
            }
            n = n%2;
        }
        return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));

// Note: In each iteration, we are reducing the value of n by half. So, It will be under Big O == O(log n) 
// The number of executions increases as 'n' grows, but not in the same amount.

//Also we can find out is PowerOfTwoUsingButwise

function isPowerOfTwoBitwise(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0  // Watch video 10. for clarification
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
