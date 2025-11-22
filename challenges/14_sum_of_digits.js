/**
 * 🔥 Problem: Sum of digits
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Sum of digits ===");
function sumDigits(n) {
  return n.toString().split("").reduce((s,d)=>s+Number(d),0);
}
console.log(sumDigits(1234));
