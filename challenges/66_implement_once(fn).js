/**
 * 🔥 Problem: Implement once(fn)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Implement once(fn) ===");
function once(fn){ let done=false; return function(...args){ if(done) return; done=true; return fn.apply(this,args); }; }
const init = once(()=> "initialized"); console.log(init(), init());
