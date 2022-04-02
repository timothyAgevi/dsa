//leetcode 3
// write a function called findLongestSubString which accepts a string,
// and returns the length of the longest substring with all distinct characters.

//examples:
// findLongestSubString('')//0
//findlongesrSubstring('rithmschool)//6
//findLongestSubString('thecatinthehat')//7

// function findLongestSubstring(str){
//     // add whatever parameters you deem necessary - good luck!
//     const arrStr = str.split('')
    
//     for (let val of arrStr){
        
//     }
//   }

//exMPLESS
//1 .s = 'abcabcbb'
//2. s ='bbbb';
//3.s ='pwwkew'
// 4. s = ''

  function lengthofLong (s){
     let max=0;//length of substring
     let windowStart=0;//strting index
     const soFar={};// object containging char and its frequency.Hash
     //windowEnd is the index, rightchar is the char at index windowEnd 
     // create counter/hash/object
     for(let windowEnd =0;windowEnd<s.length;windowEnd++){
         let rightChar =s[windowEnd];
         soFar[rightChar] =soFar[rightChar] +1 || 1; //checkif soFar[rightChar] is present increment,else asign it to 1

     // if value of soFar[righChar],is greater than 1,decrement soFar[leftChar],then move window to right
     while(soFar[rightChar]>1){
         let leftchar=s[windowStart];
         
         if(soFar[leftchar]>1){
          soFar[leftchar]-- ;  // decrement frequency of left character;
             }else{
                 delete soFar[leftchar];//if at 1 means ar 0,hence delete from hashmap
             }
             //increment windowStart
             windowStart++;

     }
     max = Math.max(max,(windowEnd- windowStart) +1);
 }
}