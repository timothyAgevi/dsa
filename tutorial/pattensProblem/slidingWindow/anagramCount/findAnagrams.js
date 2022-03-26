//Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
//steps
// pseudocode
//1. counterArrays  for frequency count for lowercase xters : new Array(26).fill(0)
//2. define result variable.
//3. counter for p: iterate  over p string charaters  and calculate the frequencies of each xter maped to the index of pArray.
   //  let index;
   // p[index]++;
 //4. counter for S:loop over i in string s
      //let index;
      // s[index]++;
      //b)//check if ( i <p.length -1)
        // find headInd
        //decrement headIndx
    //c) check if i >==p  
       //check if arrayValuesEqual
       //result.push(i - (p.length-1))
 //5.create function to check if values are same.

 var findAnagram =function (s,p){
     const sArr=new Array(26).fill(0);
    //  console.log(sArr);
     const pArr=new Array(26).fill(0);
    //  console.log(pArr);
     const result =[];

     for(let i=0;i<p.length;i++){
         let index=p.charCodeAt(i) % 26;
         pArr[index]++;
        //  console.log(index);
        //  console.log(pArr[index]);
        //  console.log(pArr)
     }
     for(let i=0;i<s.length;i++){
        let index=s.charCodeAt(i) % 26;        
        sArr[index]++;
         console.log(index);
         console.log(sArr[index]);
         console.log(sArr)
         //delete window's prevoius index 
         if(i > p.length -1){
             let headInx=s.charCodeAt(i - p.length) % 26  // i -p.length so as to remove previous index 
             sArr[headInx]--;
         }
         //add  window's  new front index
         if(i >=p.length -1){
            //check if values are equivalent
            if(arrayValuesEqual(sArr,pArr)){
                result.push(i -(p.length -1)) // push the beginning: current index - last index of p
            
            }
            console.log(result)
            return result;
         }
        

 }
}
 findAnagram("cbaebabacd","aabc")