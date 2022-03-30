// write a function called averagePair. Given a sorted array of integers,and target average,
//determine if there is a pair of values in the aray where the avg of pairs equals the target average.
//there may be more than one pair that matches average target.
//constrints: time o(n),space o(1)

//pseudocode
//1.variables -start,end,average
//2.loop when strat<end
//3.create avg values
//4.check if avg===num;
  //retutn true 
 //5.if avg >0 end--;
 //6.if avg < num  strart++;

 function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
  
