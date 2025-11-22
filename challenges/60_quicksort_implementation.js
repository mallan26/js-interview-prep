/**
 * 🔥 Problem: QuickSort implementation
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== QuickSort ===");
function quickSort(arr){ if(arr.length<=1) return arr; const pivot=arr[0]; const left=arr.slice(1).filter(x=>x<=pivot); const right=arr.slice(1).filter(x=>x>pivot); return quickSort(left).concat(pivot, quickSort(right)); }
console.log(quickSort([3,6,1,5,2,4]));
