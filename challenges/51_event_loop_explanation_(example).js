/**
 * 🔥 Problem: Event loop explanation (example)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

        console.log("=== Event loop example ===");
// Demonstrates microtask (Promise) vs macrotask (setTimeout)
console.log("start");
setTimeout(()=> console.log("timeout"), 0);
Promise.resolve().then(()=> console.log("promise"));
console.log("end");
// Expected output: start, end, promise, timeout
