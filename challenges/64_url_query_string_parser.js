/**
 * 🔥 Problem: URL query string parser
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== URL query string parser ===");
function parseQuery(q){ if(q.startsWith('?')) q=q.slice(1); return q.split('&').filter(Boolean).map(p=>p.split('=')).reduce((a,[k,v])=> (a[decodeURIComponent(k)]=decodeURIComponent(v||''), a), {}); }
console.log(parseQuery('?a=1&b=hello'));
