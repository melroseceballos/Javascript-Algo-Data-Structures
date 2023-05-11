var twoSum = function(nums, target) {
  if(nums.length < 2) return []
  for(let i = 0; i<nums.length; i++){
    let left = nums[i]
    for(let j = i + 1; j<nums.length; j++){
        let right = nums[j]
        let sum = left + right
        if(sum === target){
            return [i,j]
    }
    }
  }
  return []
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))