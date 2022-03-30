function averagePair(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0 ; 
    let right = arr.length - 1; 
    
    let mid ;
    
    while(left < right){
        mid = left + Math.floor((right - left)/2);
        if(nums[mid + 1]) return ;
    }
    
    }