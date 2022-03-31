// write a function called minSubArrayLen which accepts 2 parameters
// an array of positive integers and a positive integer.

//the function should return the minimal length of contiguous subarrays,
//of which the sum is greater than  or equal to the integer passed.

//examples
//minSubArrayLen([2,3,1,2,4,3],7)// 2  because [4,3 ]is the smallestsubarray

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0 ;
    let end = 0 ;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++; // note: apa end pekee ndio inasonga
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total(sum) but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }