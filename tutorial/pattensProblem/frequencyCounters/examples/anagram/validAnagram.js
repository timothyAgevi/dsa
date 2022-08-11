//function that tkes 2params
//check if params are equal lenght
//define counter.
//crete counter by looping index of str1
//then define var to store each letter 
//check if letter exists in obj/counter
   //true increment ,else asign 1

//loop over letter in str2
  //check if present in lookup 
    //true counter[letter]=-1
//qn Given 2 strings write a function to determine if the second string is an anagram of the first.

    function validAnagram1(first, second) {
        if (first.length !== second.length) {
          return false;
        }
      
        const lookup = {};
      //creating counter called lookup
        for (let i = 0; i < first.length; i++) {
          let letter = first[i];
          // if letter exists, increment, otherwise set to 1
          lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
        // console.log(lookup)
      
        for (let i = 0; i < second.length; i++) {
          let letter = second[i];
          // can't find letter or letter is zero then it's not an anagram
          if (lookup[letter]) {
            lookup[letter] -= 1;
            
          } else {
            // console.log(false);
            return false;
          }
        }
      //  console.log(true);
        return true;
      }
      
      // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
      validAnagram1('anagrams', 'nagaramm');

      //summary 
      //1.check if length are same.length
      //2. create counter :loop each index of fisrt string
                           //-create letter for each index in the first string.
                          //- if letter exists, increment, otherwise set to 1 
      //3.check if letter is in counter: -loop thru indexes of string 
                                         //- create var to store each character.
                                         //-   if (!lookup[letter]) :false else lookup[letter] - =1
      // return true                                    