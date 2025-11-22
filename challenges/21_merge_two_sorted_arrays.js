/**
 * 🔥 Problem: Merge two sorted arrays
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Merge two sorted arrays ===");
function mergeSorted(a,b){ const res=[]; let i=0,j=0; while(i<a.length && j<b.length) res.push(a[i]<b[j]? a[i++]: b[j++]); return res.concat(a.slice(i)).concat(b.slice(j)); }
console.log(mergeSorted([1,3,5],[2,4,6]));
