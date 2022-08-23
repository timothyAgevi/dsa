// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
         let isDuplicate = false , i= 0, checkMap = new Map()
        while (!isDuplicate && i < nums.length) {
            checkMap.set(nums[i],nums[i])
            if (checkMap.size < i + 1) {
                isDuplicate = true
            }
            i++
        }
       return isDuplicate
    };

    //second solution
    var containsDuplicate = function(nums) {
    
        dup = 0;
        
        nums.sort();
        
        for (i = 1; i < nums.length; i++){
            if (nums[i] == nums[i - 1]){
                dup ++;
            }
            
        }
        
        return dup != 0;
        
    };