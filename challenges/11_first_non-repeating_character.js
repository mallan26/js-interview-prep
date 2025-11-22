/**
 * 🔥 Problem: First non-repeating character
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== First non-repeating character ===");
function firstUnique(str) {
  const count = {};
  for(const ch of str) count[ch] = (count[ch]||0)+1;
  for(const ch of str) if(count[ch]===1) return ch;
  return null;
}
console.log(firstUnique("swiss"));
