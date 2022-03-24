function sumZero1(arr){
    let left= 0;
    let right = arr.length-1;
    while( left< right ) {
        let sum=  arr[left]+arr[right];
        if( sum ===0){
            return [ arr[left], arr[right] ];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }

    }
}
sumZero1([-4,-3,-2,-1,0,5,10])
// time Complexity 0(n)
//space complexity o(1)