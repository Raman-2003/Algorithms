// let's see Recursion and their problems


/*
// method:1
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }  // This is a base case. Everytime we do recursion, we should give the 'base case' like this.

    return n*factorial(n-1);  // this is the one kind of way to find the recursion value of a number
}

console.log(factorial(5));
console.log(factorial(10));
*/


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