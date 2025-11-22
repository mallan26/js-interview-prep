/**
 * 🔥 Problem: Find peak element
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Find peak element ===");
function findPeak(nums){ let l=0, r=nums.length-1; while(l<r){ const mid = Math.floor((l+r)/2); if(nums[mid] < nums[mid+1]) l = mid+1; else r = mid; } return l; }
console.log(findPeak([1,2,3,1]));
