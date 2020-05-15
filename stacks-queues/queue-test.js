const { Queue, print, peek } = require('./queue');

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

console.log('queue');
print(starTrekQ);
console.log('Removing Spock');
starTrekQ.dequeue();
starTrekQ.dequeue();
print(starTrekQ);
