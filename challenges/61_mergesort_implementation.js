/**
 * 🔥 Problem: MergeSort implementation
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== MergeSort ===");
function mergeSort(arr){ if(arr.length<=1) return arr; const mid=Math.floor(arr.length/2); const left=mergeSort(arr.slice(0,mid)); const right=mergeSort(arr.slice(mid)); const res=[]; let i=0,j=0; while(i<left.length && j<right.length) res.push(left[i]<=right[j]? left[i++]: right[j++]); return res.concat(left.slice(i)).concat(right.slice(j)); }
console.log(mergeSort([3,6,1,5,2,4]));
