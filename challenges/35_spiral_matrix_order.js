/**
 * 🔥 Problem: Spiral matrix order
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Spiral order ===");
function spiralOrder(matrix){ if(!matrix.length) return []; const res=[]; let top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1; while(top<=bottom && left<=right){ for(let j=left;j<=right;j++) res.push(matrix[top][j]); top++; for(let i=top;i<=bottom;i++) res.push(matrix[i][right]); right--; if(top<=bottom){ for(let j=right;j>=left;j--) res.push(matrix[bottom][j]); bottom--; } if(left<=right){ for(let i=bottom;i>=top;i--) res.push(matrix[i][left]); left++; } } return res; }
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
