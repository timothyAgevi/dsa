class myArray {
  constructor(size, length, arr) {
    this.values = arr
    this.size = size
    this.length = length
  }

  insert(index, value) {
    //[1,2,3,4,5,6,0,0,0,0]
    if (this.length < this.size) {
      for (let i = this.length - 1; i >= index; i--) {
        this.values[i + 1] = this.values[i] //shift
      }
      this.values[index] = value
    }
  }






  insertWhile(index, value) {
    let i = length - 1;
    if (this.length > this.size) {
      while (i >= index) {
        this.values[i + 1] = this.values[i]
        i--;
      }
      this.values[index] = value
    }
  }


  Delete(index) {
    //index is inside the lenght
    let value = this.values[index]
    if (index >= 0 && index < this.length) {

      while (index < this.length - 1) {

        this.values[index] = this.values[index + 1];
        index++;
      }
      this.length--;
      return value;
    }
  }

}
var array = new myArray(10, 6, [1, 2, 3, 4, 5, 6]);

let lelvalue = array.Delete(3);
console.log("The deleted value is ", delvalue)
console.log(array)

