function areThereDuplicates(...arr){
    arr.sort( (a,b)=>a>b)
    if(arr.length === 0) return 0;
    var i = 0;// index at zero  
    for(var j = 1; j < arr.length; j++){
        i++; 
        if(arr[i] == arr[j]){
            
            console.log(true)
            // return true; 
                             
                }
               
    }

    console.log(false)
    // return false;
    
}
areThereDuplicates(1,2,2)