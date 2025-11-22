/**
 * 🔥 Problem: Implement memoize
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Memoize ===");
function memoize(fn){ const cache = new Map(); return function(...args){ const key = JSON.stringify(args); if(cache.has(key)) return cache.get(key); const res = fn.apply(this,args); cache.set(key,res); return res; }; }
const fastFib = memoize(function fib(n){ return n<=1? n: fib(n-1)+fib(n-2); }); console.log(fastFib(30));
