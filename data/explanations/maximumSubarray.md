**What will dp hold?**
- Each dp[i] will hold the maximum sum for the subarray from arr[0] to arr[i]

**How to represent dp[i] based on the previous dp values?**
- dp[i] is the max previous dp[i - 1] plus arr[i] compared to arr[i]. If the current arr[i] is greater than the past max sum, dp[i] will be set to it, else dp[i] will be set to the past max sum + arr[i].

Description:
- Compare arr[i] with dp[i - 1] + arr[i] and set dp[i] with the greatest value between the two.

Shape:

```js
const maxSubArray = (nums, dp = [], i = 0) => {}
```

The key is `dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])`

Solution:

```js
var maxSubArray = function(nums, i = 1, dp = [nums[0]]) {
    if (i === nums.length) return Math.max(...dp)

    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])

    return maxSubArray(nums, i + 1, dp)
};
```