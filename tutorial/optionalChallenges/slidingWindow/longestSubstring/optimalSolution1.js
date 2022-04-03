var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
      let curr = 0;//tracks substring 
      let hash = {}; //contars xters:index
      if(s.length < 2) {
          return s.length;
      }
      for(let i = 0; i < s.length;  i++) {
          var key = s[i];//key is the character
          
          //check if key not in the hash, add 1 to value of curr
          if(hash[key] == null) {//hash[key] is the value(index of each xter)
              curr += 1;//using 1st test curr is at 3
          } else {
              curr = Math.min(i - hash[key], curr + 1);//3,4 current curl is 4 since not yet updated
          }
          max_len = Math.max(max_len, curr);
          //if key already in map update index after ,performng the codes above
           //save the index
           hash[key] = i;
          console.log(hash)
      }
      
      console.log(max_len);
      return max_len;
  };
  lengthOfLongestSubstring('abcabcbb')