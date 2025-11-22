/**
 * 🔥 Problem: Binary search
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Binary search ===");
function binarySearch(arr,target){ let l=0,r=arr.length-1; while(l<=r){ const mid = Math.floor((l+r)/2); if(arr[mid]===target) return mid; if(arr[mid]<target) l=mid+1; else r=mid-1; } return -1; }
console.log(binarySearch([1,2,3,4,5],4));
