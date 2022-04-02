function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);//start reassigned multiple times
    //   console.log(start); // just confirming
     // index - beginning of substring + 1 (to include current in count)
     longest = Math.max(longest, i - start + 1); //reassigned multiple times
      }
     
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
      console.log(start);
    //   console.log(seen);
    }
    console.log(longest);
    
    // return longest;
  }

  // findLongestSubstring('abcabcbb')
// findLongestSubstring('bbbb')
findLongestSubstring('pwwkew')
