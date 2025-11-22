/**
 * 🔥 Problem: Product of array except self
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Product except self ===");
function productExceptSelf(nums){ const n=nums.length; const res=Array(n).fill(1); let left=1; for(let i=0;i<n;i++){ res[i]=left; left*=nums[i]; } let right=1; for(let i=n-1;i>=0;i--){ res[i]*=right; right*=nums[i]; } return res; }
console.log(productExceptSelf([1,2,3,4]));
