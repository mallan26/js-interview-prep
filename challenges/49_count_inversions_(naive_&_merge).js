/**
 * 🔥 Problem: Count inversions (naive & merge)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Count inversions ===");
function countInversionsNaive(arr){ let c=0; for(let i=0;i<arr.length;i++) for(let j=i+1;j<arr.length;j++) if(arr[i]>arr[j]) c++; return c; }
function mergeCount(arr){ if(arr.length<=1) return {arr,cnt:0}; const mid=Math.floor(arr.length/2); const left=mergeCount(arr.slice(0,mid)); const right=mergeCount(arr.slice(mid)); const merged=[]; let i=0,j=0,c=left.cnt+right.cnt; while(i<left.arr.length && j<right.arr.length){ if(left.arr[i]<=right.arr[j]) merged.push(left.arr[i++]); else { merged.push(right.arr[j++]); c += left.arr.length - i; } } return {arr: merged.concat(left.arr.slice(i)).concat(right.arr.slice(j)), cnt: c}; }
console.log(countInversionsNaive([2,4,1,3,5])); console.log(mergeCount([2,4,1,3,5]).cnt);
