/**
 * 🔥 Problem: Flatten object keys
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Flatten object keys ===");
function flattenKeys(obj, prefix=''){ const res={}; for(const k in obj){ const val=obj[k]; const key = prefix? prefix+'.'+k : k; if(typeof val === 'object' && val !== null && !Array.isArray(val)) Object.assign(res, flattenKeys(val, key)); else res[key]=val; } return res; }
console.log(flattenKeys({a:1,b:{c:2,d:{e:3}}}));
