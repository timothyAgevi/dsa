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
    for(var char of str){ //char of str
       // variable for str[i] 
       var char =char.toLowerCase()// reasign char
       //add regular experession to result //TO CHECKALPHANUMERIC
       if(/[a-z0-9]/.test(char)){  //if char issth else(soace,period etc)dont do anything
   //char exists in str
        ////if char is a number/letter and key in object ,add one to count object
          result[char]=++result[char] || 1; //oneline if else     
    }
    }
   
    //return object at end
    return result;
    }
    console.log(charCount1("hello there"))

    //notes on charcter codes for
   // 1.Code> 47 <58 : numeric characters.
   // 2.Code >63 <91 :upper alpha A-Z .
   //3.code >96 <123 :lowercas alpja
     
  // slolution3 using isAlphabet instead of regular experessin
  function charCount2(str){
    //make object to return at end
    var result ={};
    //loop over str,foreach char
    for(var char of str){ //char of str
       // variable for str[i] 
       var char =char.toLowerCase()// reasign char
       //add regular experession to result //TO CHECKALPHANUMERIC
       if(isAlphanumeric(char)){  //if char issth else(soace,period etc)dont do anything
   //char exists in str
        ////if char is a number/letter and key in object ,add one to count object
          result[char]=++result[char] || 1; //oneline if else     
    }
    }
   
    //return object at end
    return result;
    }



  //isAlphaNumeric function
  function isAlphanumeric(char){
      code =char.charCodeAt(0);
      if (!(code >47 && code <58) &&//numeric characters
      !(code >63 && code <91) &&//upperCase letter
      !(code >96 && code <123)//lowecase letter
           ){
               return false
           }
           return true;
  }
    
     
     