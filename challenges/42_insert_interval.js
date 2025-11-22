/**
 * 🔥 Problem: Insert interval
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Insert interval ===");
function insertInterval(intervals,newInterval){ const res=[]; let i=0; while(i<intervals.length && intervals[i][1] < newInterval[0]) res.push(intervals[i++]); while(i<intervals.length && intervals[i][0] <= newInterval[1]){ newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]; i++; } res.push(newInterval); while(i<intervals.length) res.push(intervals[i++]); return res; }
console.log(insertInterval([[1,2],[3,5],[6,7]],[4,8]));
