/**
 * 🔥 Problem: Move zeroes to end
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Move zeroes ===");
function moveZeroes(nums){ let j=0; for(let i=0;i<nums.length;i++){ if(nums[i]!==0) nums[j++]=nums[i]; } for(;j<nums.length;j++) nums[j]=0; return nums; }
console.log(moveZeroes([0,1,0,3,12]));
