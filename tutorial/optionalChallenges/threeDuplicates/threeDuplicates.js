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
function areThereDuplicates(args) {
    if(new Set(args).size !== args.length){
        console.log("fasle")
    }
    else{
        console.log("true")
    }


  }

args=[1,2,3,4]

