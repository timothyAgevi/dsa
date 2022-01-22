//Insert
class myArray{
   constructor(size,length,arr){
     this.size=size
     this.length=length
     this.arr= arr
}
myInsert(index,val){
    if(this.length<this.size){
        for( let i=this.length-1;i>=index;i--){
          this.arr[i+1]=this.arr[i];
          
        }
     this.length ++;
       this.arr[index] = val 
    }
}
//append
myAppend(val){
  if(this.length  <this.size){
    //length of array is index of next val
    this.arr[this.length++] =val;
    
  }
  
  }
  //delete
  Delete(index){
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
// [1,2,3,4,5,6,,,]
//insert(2,7)



var arr= new myArray( 10,6 ,[1,2,3,4,5,6]) 
console.log(arr) 
 arr.myAppend(2)
  console.log(arr)  






