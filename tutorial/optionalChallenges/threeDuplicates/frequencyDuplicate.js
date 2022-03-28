//write a function called, areThreeDuplicates which accepts a variable number of aurguments, and checks whether there are any duplicates among the arguments passed in.
// can use frequency counter oer multiole duplicates pattern.
// pseudocode
//using frequency counter pattern
//1.create counter .
//2.edge case:if counter empty return false
//3.loop thro keys of counter.
   //4.check if if frequency of key >1 return true;
//5.return false.   
function frequencyDuplicate(){
    let counter ={};
    for(val of args){
        let key = args[val];
        counter[key]++;
    }
}




