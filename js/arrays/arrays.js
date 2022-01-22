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
}
// [1,2,3,4,5,6,,,]
//insert(2,7)
var arr= new myArray( 10,6 ,[1,2,3,4,5,6,]) 
console.log(arr) 
 arr.myInsert(2,7)
console.log(arr)  