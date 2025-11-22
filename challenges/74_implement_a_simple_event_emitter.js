/**
 * 🔥 Problem: Implement a simple event emitter
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Simple EventEmitter ===");
function createEmitter(){ const events={}; return { on(ev,fn){ (events[ev]=events[ev]||[]).push(fn); }, emit(ev,...args){ (events[ev]||[]).forEach(f=>f(...args)); } }; }
const em = createEmitter(); em.on('hi', console.log); em.emit('hi', 'hello');
