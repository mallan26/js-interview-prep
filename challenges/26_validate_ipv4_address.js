/**
 * 🔥 Problem: Validate IPv4 address
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Validate IPv4 ===");
function validIP(s){ const parts=s.split('.'); if(parts.length!==4) return false; for(const p of parts){ if(!/^[0-9]+$/.test(p)) return false; if(p.length>1 && p[0]==='0') return false; const num=Number(p); if(num<0||num>255) return false; } return true; }
console.log(validIP("192.168.1.1"), validIP("256.100.0.1"));
