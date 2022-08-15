//leetcode 392

var isSubsequence = function(s, t) {
  
    if (s.length == 0) {
        return true 
    };
    
    let p1 = 0 , p2 = 0;
    while(p1 < s.length && p2 < t.length) { 
        if (s.charAt(p1) == t.charAt(p2)) {
            ++p1;
        }   ++p2;
        
        if (p1 >= s.length){
            return true
        }
    };
    return false

};