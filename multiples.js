/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */

function sumOfAMultiple(n){
	var newArray=[]
	for(i=1;;i<=n;i++){
		if(i%3===0 && i%5!==0){
			newArray.push(i)
		}
		else if (i%5!==0){
			newArray.push(i)
		}
	}
	for(i=0;i<newArray.length;i++){
		result+=newArray[i]
	}
	return result
}