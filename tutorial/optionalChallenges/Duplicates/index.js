//wrong answer
function areThereDuplicates(args) {
    // good luck. (supply any arguments you deem necessary.)
    const argsArr = args.split(',')
    const counter = {}
    for(let val of argsArr){
        counter[val] = (counter[val] || 0) + 1
    }
    
    for (let key in counter){
        if(key > 1){
            return true
        }else {
            false
        }
    }
    
  }