/**
 * 🔥 Problem: Kth largest element
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Kth largest element ===");
function kthLargest(nums,k){ nums.sort((a,b)=>b-a); return nums[k-1]; }
console.log(kthLargest([3,2,1,5,6,4],2));
