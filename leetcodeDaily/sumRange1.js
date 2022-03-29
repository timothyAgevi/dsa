//we crete 2 functions i.e numArrays,sumRange to enable us call sumRange multiple times.
class NumArray {
    constructor(nums) {
        this.NumArray = [...nums]; //spread nums ,use this operator to make it acessible
    }
    //function to get sum of range
    //prototype.sumRange adds property sumRange to NumArray
    sumRange(left, right) {
        var sum = 0; //initialize sum to zero
        while (left <= right) { //iterate from keft to riht
            sum += this.NumArray[left];
            left++;
        }
        return sum;
    }
}
