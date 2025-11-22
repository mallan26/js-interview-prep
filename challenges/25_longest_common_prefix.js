/**
 * 🔥 Problem: Longest common prefix
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Longest Common Prefix ===");
function longestCommonPrefix(strs){ if(!strs.length) return ""; let prefix=strs[0]; for(const s of strs) while(s.indexOf(prefix)!==0) prefix = prefix.slice(0,-1); return prefix; }
console.log(longestCommonPrefix(["flower","flow","flight"]));
