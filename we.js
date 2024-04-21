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


// Test case for minOperations function
function testMinOperations() {
    // Test case 1
    let nums1 = [1, 1, 4, 2, 3];
    let x1 = 6;
    let expected1 = 2;
    let result1 = minOperations(nums1, x1);
    console.log("Test Case 1:", result1 === expected1 ? "Passed" : "Failed");

    // Test case 2
    let nums2 = [5, 6, 7, 8, 9];
    let x2 = 4;
    let expected2 = -1;
    let result2 = minOperations(nums2, x2);
    console.log("Test Case 2:", result2 === expected2 ? "Passed" : "Failed");

    // Test case 3
    let nums3 = [3, 2, 20, 1, 1, 3];
    let x3 = 10;
    let expected3 = 5;
    let result3 = minOperations(nums3, x3);
    console.log("Test Case 3:", result3 === expected3 ? "Passed" : "Failed");
}

// Run the test cases
testMinOperations();

