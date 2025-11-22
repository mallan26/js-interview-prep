/**
 * 🔥 Problem: Validate Sudoku
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Validate Sudoku ===");
function isValidSudoku(board){ const rows=[], cols=[], boxes=[]; for(let i=0;i<9;i++){ rows[i]=new Set(); cols[i]=new Set(); boxes[i]=new Set(); } for(let r=0;r<9;r++){ for(let c=0;c<9;c++){ const val=board[r][c]; if(val==='.') continue; const b=Math.floor(r/3)*3+Math.floor(c/3); if(rows[r].has(val)||cols[c].has(val)||boxes[b].has(val)) return false; rows[r].add(val); cols[c].add(val); boxes[b].add(val); } } return true; } console.log(isValidSudoku([['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]));
