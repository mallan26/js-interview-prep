/**
 * 🔥 Problem: LRU Cache (basic)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== LRU Cache (basic) ===");
class LRU {
  constructor(limit=3){ this.limit=limit; this.map=new Map(); }
  get(k){ if(!this.map.has(k)) return -1; const v=this.map.get(k); this.map.delete(k); this.map.set(k,v); return v; }
  put(k,v){ if(this.map.has(k)) this.map.delete(k); this.map.set(k,v); if(this.map.size>this.limit) this.map.delete(this.map.keys().next().value); }
}
const cache = new LRU(2); cache.put(1,1); cache.put(2,2); console.log(cache.get(1)); cache.put(3,3); console.log(cache.get(2));
