/**
 * 🔥 Problem: Flatten a nested array
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Flatten nested array ===");
// Beginner: recursion
function flatten_Rec(arr) {
  let out=[];
  for(const el of arr) {
    if(Array.isArray(el)) out = out.concat(flatten_Rec(el));
    else out.push(el);
  }
  return out;
}
console.log(flatten_Rec([1,[2,[3]],4]));

// Intermediate: built-in flat
console.log("\n=== Intermediate Approach ===");
console.log([1,[2,[3]],4].flat(Infinity));

// Advanced: reduce
console.log("\n=== Advanced Approach ===");
function flatten_Reduce(arr) {
  return arr.reduce((acc,cur)=> acc.concat(Array.isArray(cur)? flatten_Reduce(cur): cur), []);
}
console.log(flatten_Reduce([1,[2,[3]],4]));
