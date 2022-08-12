// 1.Write a functionthat accepts string input and returns a reversed msg
function reverse(str){  
    let reversed = "";      
     for (var i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
  }


//   slotion  B

// 2.function that calculates the sum of all numbers from 1 up to(AND INCLUDING )some number n

// solution to 2: 

//0(n):linear
function addUpto(n){                             
     let total =0;   //1 assigment     
    for (let i =1;i <=n;i++){// n assitions,n assignments  ,1 siignment on let i,n comparison
        total+=1; //n additions,n assignments
    }
    return total;
}
//  sln 2 b: 0(1)   constant    
 function addUpTo1(n){ 
     return n *(n+1)/2;  // multiplication,addition,division i.e 3 operations regardless of sze n
 }
 //timers
 let t1=performance.now();
 addUpto(100000000);
 console.log(t1) //58.32669700682163
 let t2=performance.now();
 addUpTo1(100000000)
 console.log(t2);//150.44406700134277
//  console.log(`time elapsed :${ (t1 -t2)/ 1000 } seconds` )
