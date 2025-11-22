/**
 * 🔥 Problem: Remove all occurrences of a value
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Remove value ===");
const removeValue = (arr, val) => arr.filter(x => x !== val);
console.log(removeValue([1,2,3,2],2));
