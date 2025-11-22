/**
 * 🔥 Problem: Remove duplicates from array
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Remove duplicates ===");
// Beginner: filter + indexOf
function removeDup_Filter(arr) {
  return arr.filter((v,i)=> arr.indexOf(v)===i);
}
console.log(removeDup_Filter([1,2,2,3]));

// Intermediate: Set
console.log("\n=== Intermediate Approach ===");
const removeDup_Set = (arr) => [...new Set(arr)];
console.log(removeDup_Set([1,2,2,3]));

// Advanced: reduce
console.log("\n=== Advanced Approach ===");
function removeDup_Reduce(arr) {
  return arr.reduce((acc,cur)=> acc.includes(cur)? acc: [...acc,cur], []);
}
console.log(removeDup_Reduce([1,2,2,3]));
