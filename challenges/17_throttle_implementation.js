/**
 * 🔥 Problem: Throttle implementation
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Throttle ===");
function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if(now - last >= delay) { last = now; fn.apply(this, args); }
  };
}
console.log("Throttle function created (test in browser).");
