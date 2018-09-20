
Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i++) {
    console.log(callback(this[i]));    
  }
};

Array.prototype.myMap = function(callback) {
  let resultArray = [];
  this.myEach(function(el){
    resultArray.push(callback(el));
  });
  return resultArray; 
};

Array.prototype.myReduce = function(callback, initialValue) {
  let result = initialValue;
  if (!initialValue) {
    result = this[0]; 
      for (i = 1; i < this.length; i++) {
        result = callback(result, this[i]);
      }
  } else { 
    this.myEach(function(el) {
      result = callback(result, el);
    });
  } 
  return result;
};


// Array.prototype.myReduce = function (func, initialValue) {
//   let arr = this; 
// 
//   if (!initialValue) {
//     initialValue = arr[0];
//     arr = arr.slice(1);
//   }
// 
// 
// }



