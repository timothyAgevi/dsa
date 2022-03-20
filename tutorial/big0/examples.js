function logAtleasr5(n){
    for( var i =1; i <=Math.max(5,n);i++){
        console,log(i);
    }
}
 // space complexity 


 //qn1:o(1)
 function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
//qn2: 0(n)
function logAtleasr5(n){
    for( var i =1; i <=Math.max(5,n);i++){
        console,log(i);
    }
}

//qn3: 0(1)
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//qn4 o(n)
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
//qn5 :o(n)
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}