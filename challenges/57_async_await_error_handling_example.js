/**
 * 🔥 Problem: Async/await error handling example
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Async/Await error handling ===");
async function fetchData() {
  try {
    const p = await Promise.resolve("ok");
    return p;
  } catch (err) {
    console.error("error", err);
  }
}
fetchData().then(console.log);
