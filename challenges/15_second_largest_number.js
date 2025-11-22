/**
 * 🔥 Problem: Second largest number
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Second largest ===");
function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a,b)=>b-a);
  return unique[1] ?? null;
}
console.log(secondLargest([3,1,8,2,8]));
