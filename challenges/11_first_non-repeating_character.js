/**
 * 🔥 Problem: First non-repeating character
 *
 * Approaches:
 * 1. Beginner     → Simple loops, easy to understand
 * 2. Intermediate → Uses Map, preserves order, more idiomatic JS
 * 3. Advanced     → Optimized / functional / clean patterns
 */

console.log("=== First non-repeating character ===");

/* ---------------------------------------------------------
   1️⃣ BEGINNER APPROACH
   - Count characters using plain object
   - Do a second pass to find the first count === 1
--------------------------------------------------------- */
function firstUnique_Beginner(str) {
  const count = {};
  for (const ch of str) count[ch] = (count[ch] || 0) + 1;
  for (const ch of str) if (count[ch] === 1) return ch;
  return null;
}
console.log("Beginner:", firstUnique_Beginner("swiss")); // → w



/* ---------------------------------------------------------
   2️⃣ INTERMEDIATE APPROACH (Using Map)
   Why Map?
   - Maintains insertion order
   - Cleaner iteration
   - Avoids issues with object keys and prototypes
--------------------------------------------------------- */
function firstUnique_Intermediate(str) {
  const map = new Map();

  // Count frequency
  for (const ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  // Find first character with count = 1
  for (const [ch, freq] of map) {
    if (freq === 1) return ch;
  }

  return null;
}
console.log("Intermediate:", firstUnique_Intermediate("swiss")); // → w



/* ---------------------------------------------------------
   3️⃣ ADVANCED APPROACH (Functional + Optimized)
   Approach A → Use indexOf + lastIndexOf
   - No extra data structure
   - Still O(n²) worst case, but neat for short strings
--------------------------------------------------------- */
function firstUnique_Advanced_A(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}
console.log("Advanced A (indexOf):", firstUnique_Advanced_A("swiss")); // → w



/* ---------------------------------------------------------
   3️⃣ ADVANCED APPROACH (Optimized Single Pass)
   Approach B → Two Sets Technique:
   - "seenOnce": characters seen exactly once
   - "seenMultiple": characters seen more than once
   - Single pass construction, then find the first match
--------------------------------------------------------- */
function firstUnique_Advanced_B(str) {
  const seenOnce = new Set();
  const seenMultiple = new Set();

  for (const ch of str) {
    if (seenMultiple.has(ch)) continue;

    if (seenOnce.has(ch)) {
      seenOnce.delete(ch);
      seenMultiple.add(ch);
    } else {
      seenOnce.add(ch);
    }
  }

  // Find first char in original order that is still in seenOnce
  for (const ch of str) {
    if (seenOnce.has(ch)) return ch;
  }
  return null;
}
console.log("Advanced B (Sets):", firstUnique_Advanced_B("swiss")); // → w



/* ---------------------------------------------------------
   4️⃣ BONUS: Pure Functional (Reduce + Filtering)
--------------------------------------------------------- */
function firstUnique_Functional(str) {
  const freq = [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

  return [...str].find(ch => freq[ch] === 1) || null;
}
console.log("Functional:", firstUnique_Functional("swiss")); // → w

