/**
 * 🔥 Problem: Count character occurrences
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Character count ===");
function charCount_Basic(str) {
  const map = {};
  for(const ch of str) map[ch] = (map[ch]||0)+1;
  return map;
}
console.log(charCount_Basic("banana"));

// Advanced: using Map
console.log("\n=== Advanced Approach ===");
function charCount_Map(str) {
  const m = new Map();
  for(const ch of str) m.set(ch, (m.get(ch)||0)+1);
  return m;
}
console.log(charCount_Map("banana"));
