/**
 * 🔥 Problem: Promise.all vs Promise.race example
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Promise.all vs Promise.race ===");
const p1 = Promise.resolve(1);
const p2 = new Promise(res=> setTimeout(()=>res(2), 50));
Promise.all([p1,p2]).then(console.log); // [1,2]
Promise.race([p1,p2]).then(console.log); // 1
