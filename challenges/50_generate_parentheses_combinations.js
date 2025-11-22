/**
 * 🔥 Problem: Generate parentheses combinations
 *  * Input: n=3 -> combinations like '((()))', '(()())', ...
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Generate parentheses ===");
function generateParenthesis(n){ const res=[]; function backtrack(s,open,close){ if(s.length===2*n){ res.push(s); return; } if(open<n) backtrack(s+'(', open+1, close); if(close<open) backtrack(s+')', open, close+1); } backtrack('',0,0); return res; } console.log(generateParenthesis(3));
