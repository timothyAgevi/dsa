//write a function called sameFrequency .Taken 2 positive inteegers ,finds out  have the same frequency.
// time must be o(n) linear time

//pseudocode
//1.convert  integer params to strings so as to be iteratede over, impossible for integers.
//2.edge case: if not same length.
//3.create counter for each integer.using val of
//4.check if frequncy in a, same as in 
  // loop thru indexes of second string 
     //check if digit exists in counterA
      //check if frequencies are equivalent.

  var sameFrequency=function(first,second){
      //convert numbers to strings and
      first = first.toString();
      second = second.toString();
      //edge case
      if( first.length!==second.length ) {
          return false
        }
        let counterFirst ={};
        let counterSecond={};
        //frequency counterFirst
        for(  let val of first){
            let digit = first[val];// digit shall be the key in the counter
            counterFirst[digit]++;//shall be the frequency value in counter. 
        }
        //frequency counterSecond
        for( let val of second){
            let digit = first[val];// digit shall be the key in the counter.
            counterSecond[digit]++;//shall be the frequency value in counter. 
         //check if digit exists in first counter   
            if( !counterFirst[digit]){
                return false;

            }//if exists check its frequency
            if( counterSecond[digit]!== counterFirst[digit] ){
                return false;
            }
        }
        return true;
    
    }