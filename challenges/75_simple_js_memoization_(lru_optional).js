/**
 * 🔥 Problem: Simple JS memoization (LRU optional)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Simple memoization example ===");
function memoizeSimple(fn){ const cache = new Map(); return function(...args){ const key = JSON.stringify(args); if(cache.has(key)) return cache.get(key); const res = fn(...args); cache.set(key,res); return res; }; }
const square = memoizeSimple(n=> n*n); console.log(square(5), square(5));
