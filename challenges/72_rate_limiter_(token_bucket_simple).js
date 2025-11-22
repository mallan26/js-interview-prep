/**
 * 🔥 Problem: Rate limiter (token bucket simple)
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Rate limiter (token bucket simple) ===");
function createRateLimiter(tokens, refillIntervalMs){ let available=tokens; setInterval(()=> available = tokens, refillIntervalMs); return function tryConsume(){ if(available>0){ available--; return true; } return false; }; }
const limiter = createRateLimiter(5, 1000); console.log(limiter());
