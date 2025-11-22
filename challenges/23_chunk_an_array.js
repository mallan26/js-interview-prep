/**
 * 🔥 Problem: Chunk an array
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Chunk array ===");
function chunk(arr,size){ const res=[]; for(let i=0;i<arr.length;i+=size) res.push(arr.slice(i,i+size)); return res; }
console.log(chunk([1,2,3,4,5],2));
