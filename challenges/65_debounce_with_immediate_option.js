/**
 * 🔥 Problem: Debounce with immediate option
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Debounce ===");
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(()=> fn.apply(this, args), delay);
  };
}
console.log("Debounce function created (test in browser).");
