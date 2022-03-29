// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

//we crete 2 functions i.e numArrays,sumRange to enable us call sumRange multiple times.
var NumArray = function(nums) {
    this.NumArray = [...nums]//spread nums ,use this operator to make it acessible
};
//function to get sum of range
//prototype.sumRange adds property sumRange to NumArray
NumArray.prototype.sumRange = function(left, right) {
    var sum = 0//initialize sum to zero
    while (left <= right) { //iterate from keft to riht
        sum += this.NumArray[left] 
        left++
    }
    return sum
};