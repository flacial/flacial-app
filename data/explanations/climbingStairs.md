What is the value of `dp[i]`?  the number of steps required to reach `steps[i]`

How to represent `dp[i]` based on the previous `dp` values? 

- If we already found the max distinct steps to reach both (while knowing we can only move 1-2 steps forward) `dp[i - 1]` and `dp[i - 2]`, we could use the values of these to find `dp[i]`. So, the max distinct steps to reach `dp[i]` is the sum of the max distinct steps to reach `dp[i - 1]` and `dp[i - 2]` :tada:

Shape:

```js
const climbStairs = (steps, dp = [], i = 0) => {
  return climbStairs(steps, dp, i + 1)
}
```

Formula:

1. Hardcode the distinct ways to reach 1, 2, 3 which are 1, 2, and 3 respectively
2. When the index is greater than 3, calculate `dp[i]` by adding `dp[i - 1]` & `dp[i - 2`]

```js
const climbStairs = (steps, dp = [], i = 0) => {
  if (i === 0) dp.push(1, 2, 3)
  if (steps <= 3) return dp[steps - 1]
  if (i === steps) return dp.at(-1)

  if (i > 2) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return climbStairs(steps, dp, i + 1)
}
```