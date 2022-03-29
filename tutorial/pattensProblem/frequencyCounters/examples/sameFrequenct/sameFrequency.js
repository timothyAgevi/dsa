//write a function called sameFrequency .Taken 2 positive integers ,finds out  have the same frequency.
// time must be o(n) linear time

//pseudocode
//1.convert  integer params to strings so as to be iteratede over, impossible for integers.
//2.edge case: if not same length.
//3.create counter for each integer.using val of
//4.check if frequncy in a, same as in 
  // loop thru indexes of second string 
     //check if digit exists in counterA
      //check if frequencies are equivalent.

   function sameFrequency(first,second){
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
        for(let i=0;i<first.length;i++) {
            let digit = first[i];// digit shall be the key in the counter
            counterFirst[digit]=(counterFirst[digit] || 0) + 1//shall be the frequency value in counter. 
        }
        //frequency counterSecond
        for( let i=0;i <second.length;i++){
            let digit = second[i];// digit shall be the key in the counter.
            counterSecond[digit]=(counterSecond[digit] || 0) + 1;//shall be the frequency value in counter.
        } 
        for( digit in counterFirst){
            if(!(digit in counterSecond))return false;
              //if exists   ,check frequency 
            if( counterSecond[digit]!== counterFirst[digit] ) return false;                       
             }        
             return true;    
            } 
                 
      