/**
 * 🔥 Problem: Factorial
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Factorial ===");
function factIter(n) { let res=1; for(let i=2;i<=n;i++) res*=i; return res; }
function factRec(n) { if(n<=1) return 1; return n*factRec(n-1); }
console.log(factIter(5), factRec(5));
