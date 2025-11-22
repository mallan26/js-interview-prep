/**
 * 🔥 Problem: Find missing number in sequence
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Missing number ===");
function missingNumber(arr) {
  const n = arr.length + 1;
  const expected = (n*(n+1))/2;
  const actual = arr.reduce((a,b)=>a+b,0);
  return expected - actual;
}
console.log(missingNumber([1,2,4,5]));
