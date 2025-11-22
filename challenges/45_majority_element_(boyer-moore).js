/**
 * 🔥 Problem: Majority element (Boyer-Moore)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Majority element ===");
function majorityElement(nums){ let count=0, candidate=null; for(const n of nums){ if(count===0) candidate=n; count += (n===candidate)?1:-1; } return candidate; }
console.log(majorityElement([2,2,1,1,2]));
