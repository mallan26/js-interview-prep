/**
 * 🔥 Problem: Deep equals (shallow vs deep)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Deep equals (basic) ===");
function deepEqual(a,b){ if(a===b) return true; if(typeof a !== 'object' || typeof b !== 'object' || a==null || b==null) return false; const ka=Object.keys(a), kb=Object.keys(b); if(ka.length!==kb.length) return false; for(const k of ka) if(!deepEqual(a[k], b[k])) return false; return true; }
console.log(deepEqual({a:1,b:{c:2}},{a:1,b:{c:2}}));
