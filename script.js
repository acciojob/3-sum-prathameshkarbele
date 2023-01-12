function threeSum(arr, target) {
  //your code here
	arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let currentSum = arr[i] + arr[j] + arr[k];
            if (currentSum === target) {
                return currentSum;
            } else if (currentSum < target) {
                j++;
            } else {
                k--;
            }
            closestSum = Math.abs(currentSum - target) < Math.abs(closestSum - target) ? currentSum : closestSum;
        }
    }
    return closestSum;
	
}
module.exports = threeSum;
