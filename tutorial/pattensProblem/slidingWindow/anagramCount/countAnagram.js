
const arrayValuesequal= (arr1,arr2)=>{
    for(let i=0; i<arr1.length; i++) if(arr1[i]!==arr2[i]) return false;
    return true;
}
var findAnagrams=function(s,p){
    const sArr=new Array(26).fill(0);// counter array containing frequencies of each letter
    const pArr=new Array(26).fill(0);
    const result =[];//array containing start index of anagrams
    //fill counter array for p string 
    for(let i =0; i<p.length; i++){
        let index=p.charCodeAt(i)% 26;
        pArr[index]++;
        // console.log(index);
        // console.log(pArr[index]);
        
    }
    // console.log(pArr)
    //fill counter array for s string
    for (let i =0;i <s.length;i++){//looping thru each letter in string
        let index=s.charCodeAt(i)% 26;// assigning each letter a index in the sArr
        sArr[index]++;//frequency of letters(i.e  value at each index)

        //if current index exceeds last index of anagram ,delete the previous 1st index
        if(i>p.length-1){
            let headIdx=s.charCodeAt(i-p.length)%26;//previous 1st index
            // console.log(headIdx)
            sArr[headIdx]--;// frequency of prevoius index removed
            // console.log(headIdx)
            // console.log(sArr[headIdx])            
        }
       //if  i >=p.length-1,check if arayvalues of counters are equal  
        if(i >=p.length -1){
            if(arrayValuesequal(sArr,pArr))result.push(i - (p.length-1))// add front index of anagram
                  
        }       
      
    }
    // console.log(pArr);
    // console.log(sArr);
    // console.log(result);
    return result;  
};
findAnagrams("cbaebabacd" ,"abc")