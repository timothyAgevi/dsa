// function charCount(str){
//     //do something
//     //return objects that are lowercase alphanumeric,case insensitive 
//     //i.e convert to lowercase and
// }


    // examples
// charcount('hello world')
// charcount('Your PIN  is 1234 !')
// charcount("")
// charcount("*")
//Problem: write a function that return the number a  count for each char in a string
function charCount(str){
//make object to return at end
var result ={};
//loop over str,foreach char
for(var i =0;i<str.length;i++){
   // variable for str[i] 
   var char =str[i].toLowerCase()
   //add regular experession to result //TO CHECKALPHANUMERIC
   if(/[a-z0-9]/.test(char)){
   if(result[char]>0){//char exists in str
    ////if char is a number/letter and key in object ,add one to count object
      result[char]++;
   }else{
 //if char is a number/letter a not  in object ,add it and set value to 1 .
       result[char] =1;//char not yet in result object
   };
   
}
}
 //if char issth else(soace,period etc)dont do anything
//return object at end
return result;
}
 
 console.log(charCount("hello !"))

 //refactor solution using char of instead of for i <str.length >
 function charCount1(str){
    //make object to return at end
    var result ={};
    //loop over str,foreach char
    for(var i =0;i<str.length;i++){
       // variable for str[i] 
       var char =str[i].toLowerCase()
       //add regular experession to result //TO CHECKALPHANUMERIC
       if(/[a-z0-9]/.test(char)){
       if(result[char]>0){//char exists in str
        ////if char is a number/letter and key in object ,add one to count object
          result[char]++;
       }else{
     //if char is a number/letter a not  in object ,add it and set value to 1 .
           result[char] =1;//char not yet in result object
       };
       
    }
    }
     //if char issth else(soace,period etc)dont do anything
    //return object at end
    return result;
    }
     
     console.log(charCount("hello !"))