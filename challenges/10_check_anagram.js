/**
 * 🔥 Problem: Check anagram
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Anagram check ===");
function isAnagram(a,b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isAnagram("listen","silent"));
