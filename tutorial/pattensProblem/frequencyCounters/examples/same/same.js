//write a function caklled same that takes 2 arrays.
//returns true if every value in the array has it's corresponding value
// squared in the second array.The frequencies (number of counts)must be the same length

//note order doesnt matter for
    //examples
 // same([1,2,3] , [4,1,9])// true 
 //same([1,2,3], [1,9])//false
 //same([1,2,1] ,[4,4,1])//false must be same frequency

 //naive solution o(n^2)
 // pseudocode
 
  //function with 2 params
function same(arr1,arr2){
//check if ar1.length same as arr2
   if( arr1.length !==arr2.length){
       return false;
}

//loop indexes at arr1
    for( i=0; i<=arr1.length;i++){
     //var for corect index(containing arr[1]**2)
      let correctIndex = arr2.indexOf(arr1[i]**2);
       if( correctIndex === -1){ //check if corectIndex is present in arr2
        return false;//if not return false
    }
     arr2.splice(correctIndex,1)//else splice it from array
}
  return true ;
   }
 
   console.log(same([3], [9]))
     
      
   