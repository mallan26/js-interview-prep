/**
 * 🔥 Problem: Rotate matrix 90 degrees
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Rotate matrix 90 degrees ===");
function rotate90(matrix){ const n=matrix.length; for(let i=0;i<n;i++) for(let j=i;j<n;j++) [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]; for(let i=0;i<n;i++) matrix[i].reverse(); return matrix; } console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]));
