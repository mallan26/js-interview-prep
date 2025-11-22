/**
 * 🔥 Problem: Reverse an array
 *  * Input:  [1, 2, 3]
 * Output: [3, 2, 1]
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

// ---------------------------------------------------------
// ⭐ Beginner Approach (Using a manual loop)
// ---------------------------------------------------------
console.log("=== Beginner Approach ===");
function reverseArray_Loop(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray_Loop([1, 2, 3]));


// ---------------------------------------------------------
// ⭐ Intermediate Approach (Using slice + reverse)
// ---------------------------------------------------------
console.log("\n=== Intermediate Approach ===");
function reverseArray_BuiltIn(arr) {
  return arr.slice().reverse(); // slice() → avoid mutating original
}
console.log(reverseArray_BuiltIn([1, 2, 3]));


// ---------------------------------------------------------
// ⭐ Advanced Approach (Using recursion)
// ---------------------------------------------------------
console.log("\n=== Advanced Approach ===");
function reverseArray_Recursive(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  return [...reverseArray_Recursive(rest), first];
}
console.log(reverseArray_Recursive([1, 2, 3]));
