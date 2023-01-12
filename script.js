function threeSum(arr, target) {
  //your code here
	arr.sort(a,b) => a-b;
	let closestSum = Infinity;
	for(let i=0;i<arr.length-2;i++){
		let j = i+1;
		let k = arr.length-1;
		while(j<k){
			let currSum = arr[i] + arr[j] + arr[k];
			if(currSum == target){
				return currSum;
			}
			else if(currSum < target){
				j++;
			}
			else{
				k--;
			}
			closestSum = Math.abs(currSum - target) < Math.abs(closestSum - target) ? currSum:closestSum;
		}
	}
	return closestSum;

module.exports = threeSum;
