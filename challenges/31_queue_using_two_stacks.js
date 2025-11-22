/**
 * 🔥 Problem: Queue using two stacks
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Queue using two stacks ===");
class QueueByStacks{ constructor(){ this.in=[]; this.out=[] } enqueue(x){ this.in.push(x) } dequeue(){ if(!this.out.length) while(this.in.length) this.out.push(this.in.pop()); return this.out.pop() } }
const q = new QueueByStacks(); q.enqueue(1); q.enqueue(2); console.log(q.dequeue(), q.dequeue());
