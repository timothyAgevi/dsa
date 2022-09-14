//leetcode 392

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string 
// by deleting some (can be none) 
// of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace"
//  is a subsequence of "abcde" while "aec" is not).

//// leetcode 392
var isSubsequence = function(s, t) {
  
    if (s.length == 0) {
        return true 
    };
    //p1 and p2 are indexes at sting s and t respectively
    let p1 = 0 , p2 = 0;
    while(p1 < s.length && p2 < t.length) { 
        if (s.charAt(p1) == t.charAt(p2)) {
            ++p1;
        
        }   
        ++p2;
        if (p1 >= s.length){
            // console.log(true)
            return true
        }
    };
    // console.log(false)
    return false

};
// if 1st parameter is a subsequence of 2nd
isSubsequence('abcde','ace')//false
isSubsequence('ace','abcde',)//true


//NOTE :USE THIS APPROACH INSTEAD OF FREQENCY COUNTER
