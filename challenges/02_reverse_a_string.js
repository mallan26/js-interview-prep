/**
 * 🔥 Problem: Reverse a string
 *  * Input:  [1, 2, 3]
 * Output: [3, 2, 1]
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

// ---------------------------------------------------------
// ⭐ Beginner Approach (Using a loop)
// ---------------------------------------------------------
console.log("=== Beginner Approach ===");
function reverseString_Loop(s) {
  let out = "";
  for (let ch of s) out = ch + out;
  return out;
}
console.log(reverseString_Loop("hello"));

// ---------------------------------------------------------
// ⭐ Intermediate Approach (Built-in)
// ---------------------------------------------------------
console.log("\n=== Intermediate Approach ===");
function reverseString_BuiltIn(s) {
  return s.split("").reverse().join("");
}
console.log(reverseString_BuiltIn("hello"));

// ---------------------------------------------------------
// ⭐ Advanced Approach (Recursion)
// ---------------------------------------------------------
console.log("\n=== Advanced Approach ===");
function reverseString_Recursive(s) {
  if (s === "") return "";
  return reverseString_Recursive(s.slice(1)) + s[0];
}
console.log(reverseString_Recursive("hello"));
