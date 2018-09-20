
Array.prototype.uniq = function() {
  let uniqueArray = [];
  this.forEach(function (el) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray; 
};


Array.prototype.twoSum = function() {
  const resultArray = [];
  for (i = 0; i < this.length-1; i++) {
    // let numOne = this[i];
    for(j = i+1; j < this.length; j++){
      if(this[i] + this[j] === 0){
        resultArray.push([i, j]);
      }
    }
  }
  return resultArray;
} ;

Array.prototype.transpose = function(){
  const resultArray = [];
  this.forEach(function(){
    resultArray.push([]);
  });
  
  for (i = 0; i < this.length; i++){
    for(j = 0; j < this[0].length; j++){
      resultArray[j][i] = this[i][j];
      // if(this.indexOf(this[j]) === i){
      //   resultArray[i].push(this[j]);
      // }
    }
  }
  return resultArray;
};
