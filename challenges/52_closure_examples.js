/**
 * 🔥 Problem: Closure examples
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Closure examples ===");
function makeCounter() { let count=0; return function(){ return ++count; }; }
const c = makeCounter(); console.log(c(), c(), c());
// Example with private variable
