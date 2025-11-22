/**
 * 🔥 Problem: Pairs with difference k
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Pairs with difference k ===");
function pairsWithDiff(arr,k){ const set=new Set(arr); const res=[]; for(const x of set) if(set.has(x+k)) res.push([x,x+k]); return res; }
console.log(pairsWithDiff([1,5,3,4,2],2));
