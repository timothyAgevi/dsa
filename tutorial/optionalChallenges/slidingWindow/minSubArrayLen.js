function minSubArrayLen(arr, num) {
    var n = arr.length
    var counter = []
    
    var i = 0
    var j = 0
    var scale = 0
    var sum = arr[0]
   
    var tempSum = sum;
    while(counter.length === 0) {
      if (i === 0 && j === n - 1) {
        return 0
      }
      
      // Searching single number
      if (i === j && arr[i] >= num) {
         counter.push(i, j)
         return (j - i) + 1;
      }
      
      // When i or j is over than array length
      if (i > n - 1 || j > n - 1) {
        scale++
        i = 0
        j = i + scale
        
        // Init sum in every window is change
        sum = tempSum + arr[j]
        tempSum = sum
        
      // Otherwise
      } else {
        if (i !== j) {
          if (i > 0) {
            sum = (sum - arr[i - 1]) + arr[j]
          }
   
          if (sum >= num) {
            counter.push(i, j)
            return (j - i) + 1;
          }
        }
        
        i++
        j++
      }
    }
  }