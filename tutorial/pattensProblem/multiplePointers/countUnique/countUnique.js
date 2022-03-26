// write function countUniqueVallues that accepts sorted array,
//and counts the unique values in the array.
//there can be negative numbers in array,but it will be always sorted.
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;// index at zero
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(i +1)
    return i + 1;
    
}
countUniqueValues([1,2,2,5,7,7,9,9]) //1,2
//countUniqueValues([1,2,3,4,4,5]) 1,2,3,5

// try without changing array.
