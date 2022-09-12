//Write a function that takes 2 strings and checks whether the charascters 
//infirst string appear somewhere in second string ,without their order changing.

// leetcode 392

function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    const counter1 = {}
    const counter2 = {}
    
    for(let val of str1){
        counter1[val] = val
    }
    for(let val of str2){
        counter2[val] = val
    }
    
    for(let key in counter1){
        if(counter2[key]){
            return truenty
        }else {
            false
        }
    }
    
    
  }

  //use multiple pointers instead of frequincy 