/**
 * 🔥 Problem: Deep clone object/array
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Deep clone ===");
function deepClone(obj){ if(obj===null || typeof obj !== 'object') return obj; if(Array.isArray(obj)) return obj.map(deepClone); const res={}; for(const k in obj) res[k]=deepClone(obj[k]); return res; }
console.log(deepClone({a:1,b:{c:2}}));
