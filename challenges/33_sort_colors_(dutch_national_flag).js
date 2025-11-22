/**
 * 🔥 Problem: Sort colors (Dutch National Flag)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Sort colors (0,1,2) ===");
function sortColors(nums){ let low=0, mid=0, high=nums.length-1; while(mid<=high){ if(nums[mid]===0) [nums[low++],nums[mid++]]=[nums[mid],nums[low]]; else if(nums[mid]===1) mid++; else [nums[mid],nums[high--]]=[nums[high],nums[mid]]; } return nums; }
console.log(sortColors([2,0,2,1,1,0]));
