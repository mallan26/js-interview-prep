/**
 * 🔥 Problem: Check palindrome
 *  * Input: 'racecar' -> true
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Palindrome Checks ===");
// Beginner
function isPalindrome_Basic(s) {
  const normalized = s.toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}
console.log(isPalindrome_Basic("Racecar"));

// Intermediate (two-pointer)
console.log("\n=== Intermediate Approach ===");
function isPalindrome_TwoPointer(s) {
  s = s.toLowerCase();
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
}
console.log(isPalindrome_TwoPointer("Racecar"));

// Advanced (ignore non-alphanum)
console.log("\n=== Advanced Approach ===");
function isPalindrome_Advanced(s) {
  const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return filtered === filtered.split("").reverse().join("");
}
console.log(isPalindrome_Advanced("A man, a plan, a canal: Panama"));
