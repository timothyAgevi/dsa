var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
      let curr = 0;//tracks substring 
      let hash = {}; //contars xters:index
      if(s.length < 2) {
          return s.length;
      }
      for(let i = 0; i < s.length;  i++) {
          if(hash[s[i]] == null) {
              curr += 1;
          } else {
              curr = Math.min(i - hash[s[i]], curr + 1);//3,4 cyrent curl is 4 since not yet updated
          }
          max_len = Math.max(max_len, curr);
          hash[s[i]] = i; //save the index
      }
      return max_len;
  };
  lengthOfLongestSubstring('abcabcbb')