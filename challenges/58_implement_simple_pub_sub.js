/**
 * 🔥 Problem: Implement simple Pub/Sub
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Simple Pub/Sub ===");
function createPubSub(){ const subs = {}; return { subscribe(topic, fn){ (subs[topic]=subs[topic]||[]).push(fn); }, publish(topic, data){ (subs[topic]||[]).forEach(f=>f(data)); } }; }
const bus = createPubSub(); bus.subscribe('msg', console.log); bus.publish('msg','hello');
