//Write a functio maxSubarraySum that accepts an array of integers and a number called n.
 //the function should calculate the  maxium sum of n consecutive elements in array.
 function maxSubarraySum(arr, num){
    if (arr.length < num) return null;//edge case: if num greater than arr.length
    let maxSum = 0;
    let tempSum = 0;
   
    //loop thru num
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];// set maxSum
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];//apply sliding window
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  //linear complexity

  //challenge:return indexes of values creating maxSubArraay