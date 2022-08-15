//Write a function that takes 2 strings and checks whether the charascters 
//in first string appear somewhere in second string ,without their order changing.

//pesedo code
  //1.check if params length same
  //2.create counter.
  //3.loop over keys in counter1
     //check if key is present in counter2

function isSubsequence(str1,str2){
    
    let counter1={}
    let counter2={}

    for( let i=0;i<str1.length;i++){
        let char=counter1[i];
        counter1[char]=(counter1[char] ||0)+ 1;

    }
    for( let i=0;i<str1.length;i++){
        let char=counter2[i];
        counter2[char]=(counter2[char] ||0)+ 1;

    }

    for( let key in counter1){
        if( key in counter2){
            return true;
        }else
        return false;
    }
}