// //A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

function solution(N){
let binaryN = (N >>>0).toString(2);  //Changes the binary number to string 

    let maxGap = 0;                     //sets the maximum number of binary gaps to 0

    for(let i = 0; i<binaryN.length; i++){                //sets the counter i to zero and loops through the entire binary length while incrementing by 1 

        for(let j=i; j<binaryN.length; j++){             //sets the counter j to i and loops through the entire binary length while incrementing by 1 

            if(binaryN[i] && binaryN[j]  == 1  && i!=j){  //checks whether both i and j are equal to 1 but not equal to each other

                if(maxGap< j-i-1){                     //Calculates the maximum gap

                    maxGap = j-i-1;
                }
                i=j;
            }
        }
    }
    return maxGap;
}


//sln2
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
  const Binary = N.toString(2); // "1001"
const BinaryArray = Binary.split(''); // ["1", "0", "0", "1"]
//looping through new arrays
let i=0


    
// finding the first one via its index
const firstOne = BinaryArray.indexOf("1"); // 0 = Index in  array
// new array created taking a slice of original array
// from the index of the firstOne + 1 index
var NewBinaryArray = BinaryArray.slice(firstOne + 1);
// ["0", "0", "1"]
// finding second one via its index in new array slice
var secondOne = NewBinaryArray.indexOf("1"); // 2
// where we store our gaps
var gaps = [];
// adding 2 to our gaps array
gaps.push(secondOne); // [2]


// getting largest value in array
if(gaps > 0){
    // console.log(gaps.max() );
    // console.log(Math.max.apply(Math, gaps))
return Math.max.apply(Math, gaps);
}else{
    // console.log(0);
    return 0;
}
}
solution(145);

//solution 3 :Recursion
function getGaps (BinaryArray, gaps) {
    // finding the first one via its index
    const firstOne = BinaryArray.indexOf("1");
    if (firstOne > -1) {
         // new array created taking a slice of original array 
         // from the index of the firstOne + 1 index
         let NewBinaryArray = BinaryArray.slice(firstOne + 1);
         // finding second one via its index in new array slice
         const secondOne = NewBinaryArray.indexOf("1");
         // accounting for no zeros
         if (secondOne > 0) {
              // adding 2 to our gaps array
              gaps.push(secondOne);
         }

         // Pass array minus second one and gaps array
         return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
    }
    
    // if gaps array length is empty return 0
    // otherwise return largest value in array
    return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
// our function 
function solution (N) {
    
    // Tests if our value is an integer 
    // Tests if N is within range
    if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
         // Convert to binary
         const Binary = N.toString(2).split('');
         
         // calling our recursive function with initial empty gaps
         return getGaps(Binary, []);
    }
     
    // default if it doesn't meet the requirements
    return 0;
}


// Scenarios:
// N = 9 (1001), Expected = 2
// N = 529 = (1000010001), Expected = 4
// N = 51272 (1100100001001000), Expected = 4
// N = 15 (1111), Expected = 0
// N = 53 (110101), Expected = 1
// N = 2147483647 (1111111111111111111111111111111), Expected = 0
// N = 2147483648 (10000000000000000000000000000000), Expected = 0
// N = 0 (0), Expected = 0
// N = -1 (null), Expected = 0
// N = "A" (null), Expected = 0
// N = null (null), Expected = 0
// N = [blank] (null), Expected = 0


