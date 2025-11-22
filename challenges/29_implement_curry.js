/**
 * 🔥 Problem: Implement curry
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Curry ===");
function curry(fn){ return function curried(...args){ if(args.length >= fn.length) return fn.apply(this,args); return function(...more){ return curried.apply(this, args.concat(more)); }; }; }
function add(a,b,c){ return a+b+c; } const cur = curry(add); console.log(cur(1)(2)(3));
