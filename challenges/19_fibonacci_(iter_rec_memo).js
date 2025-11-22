/**
 * 🔥 Problem: Fibonacci (iter/rec/memo)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Fibonacci ===");
function fibRec(n){ if(n<=1) return n; return fibRec(n-1)+fibRec(n-2); }
function fibIter(n){ if(n===0) return 0; let a=0,b=1; for(let i=2;i<=n;i++) [a,b]=[b,a+b]; return b; }
function fibMemo(n,memo={}){ if(n in memo) return memo[n]; if(n<=1) return n; memo[n]=fibMemo(n-1,memo)+fibMemo(n-2,memo); return memo[n]; }
console.log(fibRec(10), fibIter(10), fibMemo(30));
