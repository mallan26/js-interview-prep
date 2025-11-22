/**
 * 🔥 Problem: Find max number in array
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

// Beginner: loop
console.log("=== Beginner Approach ===");
function max_Loop(arr) {
  let m = -Infinity;
  for (const n of arr) if (n > m) m = n;
  return m;
}
console.log(max_Loop([3,1,8,2]));

// Intermediate: Math.max
console.log("\n=== Intermediate Approach ===");
function max_BuiltIn(arr) {
  return Math.max(...arr);
}
console.log(max_BuiltIn([3,1,8,2]));

// Advanced: reduce
console.log("\n=== Advanced Approach ===");
function max_Reduce(arr) {
  return arr.reduce((a,b)=> a>b? a: b, -Infinity);
}
console.log(max_Reduce([3,1,8,2]));
