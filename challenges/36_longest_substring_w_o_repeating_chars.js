/**
 * 🔥 Problem: Longest substring w/o repeating chars
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Longest substring without repeating chars ===");
function lengthOfLongestSubstring(s){ const map=new Map(); let left=0,max=0; for(let right=0; right<s.length; right++){ if(map.has(s[right])) left = Math.max(left, map.get(s[right])+1); map.set(s[right], right); max = Math.max(max, right-left+1); } return max; }
console.log(lengthOfLongestSubstring("abcabcbb"));
