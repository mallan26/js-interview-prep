/**
 * 🔥 Problem: Rotate array by k steps
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Rotate array by k ===");
function rotate(arr,k){ if(!arr.length) return arr; k = k % arr.length; return arr.slice(-k).concat(arr.slice(0, arr.length-k)); }
console.log(rotate([1,2,3,4,5],2));
