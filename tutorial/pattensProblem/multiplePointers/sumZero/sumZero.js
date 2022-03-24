// naive solution
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for( let j=0;j<arr.length; j++ ){
            if( arr[i] + arr[j] ===0){
                console.log[ arr[i] ,arr[j] ]
            }
        }
    }
}
sumZero([-3,-2,-1,0,1,2,3] )
// time complexity: o(n^2)
//space complexity: o(1)