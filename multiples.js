/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  for(var i = n-1; i >= 0; i--){
    if(i % 3 === 0){
      sum += i;
    }else if(i % 5 === 0){
      sum +=  i;
    }
  };

  return sum;
};
