/**
 * 🔥 Problem: Merge intervals
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Merge intervals ===");
function mergeIntervals(intervals){ if(!intervals.length) return []; intervals.sort((a,b)=>a[0]-b[0]); const res=[intervals[0]]; for(const it of intervals.slice(1)){ const last=res[res.length-1]; if(it[0] <= last[1]) last[1]=Math.max(last[1], it[1]); else res.push(it); } return res; }
console.log(mergeIntervals([[1,3],[2,6],[8,10]]));
