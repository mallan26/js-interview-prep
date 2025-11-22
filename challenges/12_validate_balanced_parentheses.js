/**
 * 🔥 Problem: Validate balanced parentheses
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Balanced parentheses ===");
function isBalanced(s) {
  const stack = [];
  const map = {")":"(", "}":"{", "]":"["};
  const opens = new Set(Object.values(map));
  for(const ch of s) {
    if(opens.has(ch)) stack.push(ch);
    else if(map[ch]) { if(stack.pop() !== map[ch]) return false; }
  }
  return stack.length===0;
}
console.log(isBalanced("({[]})"), isBalanced("(]"));
