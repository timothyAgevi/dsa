//function with 2 paramters:
function same1(arr1,arr2){
//check if length is same length
if(arr1.length !==arr2.length){
return false;
}
//crete counters:object with key ,values(frequencies)
let counter1= {} ;
let counter2 ={};
//loop through each index of array finding its values.
//val for each index in 1st array key
for( let val of arr1){
   counter1[val]= (counter1[val] || 0) + 1
}
//val for each index in 2nd array 
for( let val of arr2){
    counter2[val]= (counter2[val] || 0) + 1
 }
 //print counters
 console.log(counter1);
    console.log(counter2);
 // loop thru keys in counter1
 for( let key in counter1){
     //check if keys in counter2 meet expectations of those in counter1
     if(!(key **2 in counter2)){
         return false;
     }
     //check if frequency of values in  counter2 are equivalent to those in counter1
     if( counter2[key**2] !==counter1[key] ){
         return false;
     }
 }
console.log('true')
 return true;
}
same1([1,2,3,2], [9,1,4,4])