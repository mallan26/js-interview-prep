/**
 * 🔥 Problem: Implement power function (x^n)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Implement pow(x,n) ===");
function fastPow(x,n){ if(n===0) return 1; if(n<0) return 1/fastPow(x,-n); let res=1; while(n>0){ if(n%2===1) res*=x; x*=x; n=Math.floor(n/2);} return res; }
console.log(fastPow(2,10));
