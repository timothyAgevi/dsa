//write a function called, areThreeDuplicates whuch accepts a variable number of aurguments, and checks whether there are any duplicates among the arguments passed in.
// can use frequency counter oer multiole duplicates pattern.
// pseudocode
//1.convert args to array.
//2.edge case: array empty,return false
// else using multiple pointers
//3.let var i=0
//4.loop over array wirh j starting from 1. and
   //4.check if arr[i] !===arr[j], increment i, continue
//5. else return true;
var areThreeDuplicates= function(args){
    const argsArr=args.split(',');
    //edge case:if array is empty
    if(argsArr.length===0)return false;
     let i =0;


}

