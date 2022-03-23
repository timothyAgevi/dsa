//Given 2 strings write a function to determine if the second string is an anagram of the first.

//pseidocode
//function taking 2 parameters
function validAnagram(str1,str2){
//check if str1.length==str2.lenghth
if( str1.length !== str2.length){
    return false;          
}
//create counter for both Strings
let counter1={}
let counter2={}
//create arrs for  each string
let arrStr1=str1.split('')
let arrStr2= str2.split('')
//loop  each val of  each arr
for( val of  arrStr1){
//create counters here
   counter1[val]=( counter1[val] ||0) + 1
}
 // counter for arrStr2
 for( val of  arrStr2){
    //create counters here
       counter2[val]=( counter2[val] ||0) + 1
    }
// loop each key of frequencyCounter1
for( key in counter1){
// check if key in str1 is in str2
if(  !( key in counter2)){
    return false;
}
//check if frequency of element in str1 ==str2
if( counter1[key] !== counter2[key] ){
    return false;
}
return true;
}
  console.log( counter1) 
  console.log( counter2) 
  console.log('true')
}
validAnagram('act','cat')