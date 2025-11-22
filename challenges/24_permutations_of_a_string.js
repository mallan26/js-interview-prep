/**
 * 🔥 Problem: Permutations of a string
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Permutations ===");
function permute(str){ if(str.length<=1) return [str]; const res=[]; for(let i=0;i<str.length;i++){ const ch=str[i]; const rest=permute(str.slice(0,i)+str.slice(i+1)); for(const r of rest) res.push(ch+r);} return res; }
console.log(permute("abc"));
