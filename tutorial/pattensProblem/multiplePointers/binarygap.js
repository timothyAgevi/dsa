//
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
// finding the first one via its index
const firstOne = BinaryArray.indexOf("1"); // 0 = Index in  array
// new array created taking a slice of original array
// from the index of the firstOne + 1 index
let NewBinaryArray = BinaryArray.slice(firstOne + 1);
// ["0", "0", "1"]
// finding second one via its index in new array slice
const secondOne = NewBinaryArray.indexOf("1"); // 2
// where we store our gaps
const gaps = [];
// adding 2 to our gaps array
gaps.push(secondOne); // [2]
// getting largest value in array
if(gaps > 0){
return Math.max.apply(Math, gaps);
}else{
    return 0;
}
}
solution(15);

