function averagePair(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let start=0;
    let end= arr.length -1;
    if( arr.length==0)return false;
    while( start < end){
        let avg= (arr[start] + arr[end])/2 ;
        if( avg===num){
            return true;
        }else if( avg > num){
            end--;
        }else{
        start++;
        }
    }
    return false;
  }