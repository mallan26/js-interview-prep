/**
 * 🔥 Problem: Implement Object.assign polyfill
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Object.assign polyfill ===");
function assign(target, ...sources){ if(target==null) throw new TypeError('Cannot convert undefined or null to object'); const to=Object(target); for(const s of sources) if(s!=null) for(const k of Object.keys(s)) to[k]=s[k]; return to; }
console.log(assign({}, {a:1}, {b:2}));
