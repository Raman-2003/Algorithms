// Linear search
const array = [-5, 2, 10, 4, 6];
const target = 10;

// We need to find the index of an element in this array. If not found, return -1.

function linearSearch(array, target){
    for(i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(array, 10));
console.log(linearSearch(array, 6));
console.log(linearSearch(array, 7));

// Big-O = O(n) => Linear time complexity. meansm , if size of an array increases, the loop executes rotation also increases.Also It has one loop





// Binary search. Binary search only works on sorted array. If we didn't have sorted array, we can choose linear search method
// or first we do sort the given array and perform binary search.


// But this is not a valid perform
const arrays = [-5, 2, 10, 4, 6];
// First thing, we need to sort this array.
var sortedArray = arrays.sort((a,b)=>a-b);
console.log(sortedArray);
function binarySearch(arrays, target){   
    for(i=0; i<arrays.length; i++){
        if(arrays[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(binarySearch(arrays, 10));
console.log(binarySearch(arrays, 6));
console.log(binarySearch(arrays, 20));


function binarySearch(array, target){
        let leftIndex = 0;
        let rightIndex = array.length -1;
        while(leftIndex <= rightIndex){
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
            if(target === array[middleIndex]){
                return middleIndex;
            }
            if(target < array[middleIndex]){   
                rightIndex = middleIndex - 1;
            } else {
                leftIndex = middleIndex + 1;
            }
        }
        return -1
}


console.log(binarySearch([-5, 2, 4, 6, 10], 6))  // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

// Big-O = O(logn) . // It conatins a single while loop. But everytime it reduces the haf of an index.



function recursiveBinary(array, target){
    return binarySearch(array, target, 0, array.length-1);
}

function search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === middleIndex){
        return middleIndex;
    }

    if(target < array[middleIndex]){
        return search(array, target, leftIndex, middleIndex-1);
    }else {
        return search(array, target, middleIndex+1, rightIndex);
    }
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinary([-5, 2, 4, 6, 10], -20));