function minOperations(nums, x) {
    const targetSum = nums.reduce((acc, curr) => acc + curr, 0) - x;
    if (targetSum === 0) return nums.length;

    let maxLength = -1;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        while (currentSum > targetSum && left <= right) {
            currentSum -= nums[left];
            left++;
        }
        if (currentSum === targetSum) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength !== -1 ? nums.length - maxLength : -1;
}

// Example usage:
const nums = [1, 1, 4, 2, 3];
const x = 5;
console.log(minOperations(nums, x)); // Output should be 2
