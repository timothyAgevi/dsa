// Given an array of integers and a number,
//write a function caleed maxSubarraySum,which finds the maximum sum of subarray
// with the length of the number passed to the function. 
function maxSubarraySum(arr, num){
    if(num > arr.length) return null
    
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i ++){
        tempSum += arr[i];
        maxSum = tempSum;
    }

    for(let i =  num; i < arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        if(tempSum > maxSum ){
            maxSum = tempSum
        }
    }

    return maxSum;
  }