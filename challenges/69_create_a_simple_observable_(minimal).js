/**
 * 🔥 Problem: Create a simple Observable (minimal)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Simple Observable (minimal) ===");
function Observable(subscribe){ return { subscribe }; }
const obs = Observable((observer)=>{ observer.next(1); observer.complete && observer.complete(); });
obs.subscribe = (observer)=> subscribe(observer);
console.log("Minimal observable example (conceptual).");
