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
linearSearch(key){
  for(let i=0;i< this.length;i++){
  if(this.arr[i]==key){
    return i;
  }
}
  return -1;
}
binarySearch(key){
  let high=this.length-1,
  low=0;
  while(low <=high){
   let  mid= Math.ceil((low +high)/2)
    if(key ===this.arr[mid]){
      return mid;
    }
    else{
      if(key < this.arr[mid]){
        high =mid -1;
      }else if(key >this.arr[mid]){
         low = mid +1
      }
    }
  }
  return -1
}
}



var arr= new myArray( 10,6 ,[1,2,3,4,5,6]) 
console.log(arr) 
let index=arr.binarySearch(5)
//  arr.linearSearch(2) 
  console.log(index)  






