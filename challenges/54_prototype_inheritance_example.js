/**
 * 🔥 Problem: Prototype inheritance example
 *
 * Below are three approaches:
 * 1. Beginner     → Simple loop/clear logic
 * 2. Intermediate → Uses built-ins / concise patterns
 * 3. Advanced     → Optimized / algorithmic / functional
 */

console.log("=== Prototype inheritance example ===");
function Person(name){ this.name = name; }
Person.prototype.greet = function(){ return 'Hi, ' + this.name; };
const p = new Person('Mahi'); console.log(p.greet());
