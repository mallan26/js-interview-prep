/**
 * 🔥 Problem: Detect cycle in linked list (Floyd)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

        console.log("=== Detect cycle in linked list (Floyd) ===");
// For conceptual demonstration (array-based)
function hasCycle(arr) { // using tortoise-hare for conceptual linked list indices
  let slow=0, fast=0;
  while(true){
    slow = arr[slow];
    fast = arr[arr[fast]];
    if(slow === undefined || fast === undefined) return false;
    if(slow === fast) return true;
  }
}
console.log("conceptual example: see linked list implementation for real use.");
