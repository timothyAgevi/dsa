//write a function called, areThreeDuplicates which accepts a variable number of aurguments, and checks whether there are any duplicates among the arguments passed in.
// can use frequency counter oer multiole duplicates pattern.
// pseudocode
//using frequency counter pattern
//1.create counter .
//2.edge case:if counter empty return false
//3.loop thro keys of counter.
   //4.check if if frequency of key >1 return true;
//5.return false.   
function areThereDuplicates() {
    let collection = {}
    for(let index in arguments){ //note use in not of
      let key = arguments[index]//values in argument are keys in counter
      collection[key] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }




