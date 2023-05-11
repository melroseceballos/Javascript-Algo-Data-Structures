var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currentSub = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentSub > 0) {
            currentSub += nums[i];
        } else {
            currentSub = nums[i];
        }

        maxSub = Math.max(currentSub, maxSub);
    }

    return maxSub;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
