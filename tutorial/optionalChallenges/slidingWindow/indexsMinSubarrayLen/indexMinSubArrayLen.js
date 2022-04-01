// write a function called indexminSubArrayLen which accepts 2 parameters
// an array of positive integers and a positive integer.

//the function should return the  indexes of minimal length of contiguous subarrays,
//of which the sum is greater than  or equal to the integer passed.

//examples
//minSubArrayLen([2,3,1,2,4,3],7)// 2  because [4,3 ]is the smallestsubarray

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0 ;
    let end = 0 ;
    
    result =[];
    let i= 0 || nums.length -1;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++; // note: apa end pekee ndio inasonga
      }
      // if current window adds up to atleast the sum given then
          // we can shrink the window 
      else if(total >= sum){
        
       
              total -= nums[start];
              start++;
      } 
      // current total less than required total(sum) but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
    result.push(nums[i],nums[i-1])
    
     console.log(result);
  }
  minSubArrayLen([1,2,3,4],7)