/**
 * 🔥 Problem: Two Sum
 *  * Input: [2,7,11,15], target=9 -> [0,1]
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Two Sum ===");
function twoSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (map[need] !== undefined) return [map[need], i];
    map[arr[i]] = i;
  }
  return null;
}
console.log(twoSum([2,7,11,15],9));
