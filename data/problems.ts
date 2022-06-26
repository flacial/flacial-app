export type Problem = {
    name: string;
    short: string;
    type: string[];
    link: string;
    solution: string;
    id: string;
}

export const problems: Problem[] = [
    {
        name: 'Climbing Stairs',
        short: 'climbingStairs',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/climbing-stairs/',
        solution: 
`const climbStairs = (n, i = 3, steps = [0, 1, 2]) => {
    if (n === 1) return 1
    if (n === 2) return 2
    
    if (i >= n) return steps[i - 1] + steps[i - 2]
    
    steps.push(steps[i - 1] + steps[i - 2])
    
    return climbStairs(n, i + 1, steps)
};`,
        id: '#70'
    },
    {
        name: 'Maximum Subarray',
        short: 'maximumSubarray',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/maximum-subarray/',
        solution: 
`const maxSubArray = (nums, i = 0, maxSum = [nums[0]]) => {
    if (i === nums.length - 1) return Math.max(...maxSum)
    
    maxSum.push(Math.max(maxSum[i] + nums[i + 1], nums[i + 1]))

    
    return maxSubArray(nums, i + 1, maxSum)
};`,
        id: '#53'
    },
    {
        name: 'Range Sum Query - Immutable',
        short: 'rangeSumQuery',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/range-sum-query-immutable/',
        solution: 
`var NumArray = function(nums) {
    this.sumArr = [];
    
    const a = (arr = [nums[0]], i = 0) => {
        if (arr.length > nums.length) return arr
        
            arr.push(nums[i] + arr[i])
        
        return a(arr, i + 1)
    }
    
    this.vs = a()
    };
    
    NumArray.prototype.sumRange = function(left, right) {
    return this.vs[right + 1] - this.vs[left];
};`,
        id: '#303'
    },
    {
        name: 'House Robber',
        short: 'houseRobber',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/house-robber/',
        solution: 
`const rob = (nums, dp = [nums[0], Math.max(nums[0], nums[1])], i = 2) => {
    if (nums.length < 2) return nums[0]
    if (dp.length === nums.length) return dp[dp.length - 1]

    dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]))
    
    return rob(nums, dp, i + 1)
}`,
        id: '#198'
    },
    {
        name: 'Coin Change',
        short: 'coinChange',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/coin-change/',
        solution: 
`var coinChange = function(coins, amount, i = 1, dp = [0]) {
    if (amount === 0) return dp[0]
    if (dp.length - 1 === amount) 
        return dp[dp.length - 1] ? dp[dp.length - 1] : -1
    
    let a = []
    
    coins.forEach(coin => {
        if (dp[i - coin] >= 0) a.push(dp[i - coin])
    })
    
    dp.push(!a.length ? -1 : Math.min(...a) + 1)
    
    return coinChange(coins, amount, i + 1, dp)
};`,
        id: '#322'
    },
    {
        name: 'Jump Game',
        short: 'jumpGame',
        type: [
            'DP'
        ],
        link: 'https://leetcode.com/problems/jump-game/',
        solution: 
`var canJump = function(nums, c = [true], i = 0) {
    if (i === nums.length - 1) {
        if (c.length >= nums.length) return true
        return false
    }

    const g = (x, y = 1) => {
        if (y > x) return
        
        if (c[y + (i - 1)]) {
            c[i + y] = true
        }
        
        if (i + y === nums.length - 1 && c[y + (i - 1)]) return true
        
        return g(x, y + 1)
    }
    
    if (g(nums[i])) return true
    
    return canJump(nums, c, i + 1)
};`,
        id: '#55'
    }
]