/**
 * 🔥 Problem: Find intersection of two arrays
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Intersection of two arrays ===");
function intersection(a,b){ const set=new Set(b); return [...new Set(a.filter(x=> set.has(x)))]; }
console.log(intersection([1,2,2,3],[2,3,4]));
