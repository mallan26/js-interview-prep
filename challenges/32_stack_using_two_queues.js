/**
 * 🔥 Problem: Stack using two queues
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Stack using two queues ===");
class StackByQueues{ constructor(){ this.q1=[]; this.q2=[] } push(x){ this.q1.push(x) } pop(){ while(this.q1.length>1) this.q2.push(this.q1.shift()); const res = this.q1.shift(); [this.q1,this.q2]=[this.q2,this.q1]; return res } }
const s = new StackByQueues(); s.push(1); s.push(2); console.log(s.pop(), s.pop());
