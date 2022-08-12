|BIg O Notation |  Name  |Example |
|:--:|:--:|:--:|
| O (1) |Constant |<ul><li>Odd or Even number</li> <li>Look-up table (on average)</li></ul> |
| O (log n) |logarithmic |<ul> <li> Finding element on sorted array with binary search</li></ul> |
| O (n) |linear  |<ul><li>Find max element in unsorted array</li> <li>Duplicate elements in array with Hash Map</li></ul> |
| O (n log n) |Linear logarithmic |<ul><li> Sorting elements in array with merge sort</li> </ul> |
| O (n2) |Quadratic |<ul> <li>Sorting array with bubble sort</li></ul> |
| O (n3) |Cubic |<ul><li>3 variables equation solver</li></ul> |
| O (2n) |exponential |<ul><li> Find all subsets</li></ul> |
| O (n!) |factorial |<ul><li>find all permutations of a given set/string</li></ul> |


rules of thumbs for big o
 1.Constants do not matter.
 2.Smaller terms dont matter.
 
 big o  time complexity sharthands 
 1.Arithmetic operations are constants.
 2.Variable assignments is constant.
3.accesing object in arrar(by index) or object(by key)is constant
4. in a loop,  complexity =length of loop * complexity of what happens inside it

#space complexity:
Memory allocated to run algo.

auxillary space complexity:space required by the algorithm, not including space taken up by the inputs
-Mostly used

#space complexity Rules of thumbs
1.Most primitives (booleans, numbers, undefined, null) are constant space.
2.Strings require O(n) space (where n is the string length)
3.Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

logarithm /exponent of number :number of times you can divide that number by 2 before you get a value that's less than or equal to one
-also refered to as power
        e.g some searching algorithims, efficient sorting,recursion sometimes
       e.g 1 :space complexity =0(1)
       function sum(arr){
           let total =0;
           for(let i =0 ;i< arr.lenth;i++>){
               total +=arr[i];
           }
           return total;
       } 
       eg2:spce complexity 0(n)
       function double(arr){
           let newArr =[];
           for(let i =0; i<arr.lentrh;i++){
               newArr.push(2*arr[i]);
           }
           return newArr;
       }

       eg3:spce 0(1)
       function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}