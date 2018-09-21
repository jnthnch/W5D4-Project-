Array.prototype.bubbleSort = function() {
  let result = this;
  for (i = result.length; i >= 0; i--) {
    for (j = 0; j < result.length-1; j++) {
      // for (k = j+1; k < this.length, k++){
        if (result[j] > result[j+1]){
          [result[j], result[j+1]] = [result[j+1], result[j]];
        }
      // }
    }
  }
  return result;
};

String.prototype.substrings = function(){
  let result = [];
  for(i = 0; i <= this.length-1; i++) { 
    for (j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i,j));
    }
  }  
  return result;
};