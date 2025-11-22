/**
 * 🔥 Problem: Transpose matrix
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Transpose matrix ===");
function transpose(matrix){ const m=matrix.length, n=matrix[0].length; const res = Array.from({length:n},()=>Array(m).fill(null)); for(let i=0;i<m;i++) for(let j=0;j<n;j++) res[j][i]=matrix[i][j]; return res; }
console.log(transpose([[1,2,3],[4,5,6]]));
