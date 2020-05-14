const LinkedList = require('./linked-list');
const utils = require('./utils');

const ll = new LinkedList();

ll.insertLast('Apollo');
ll.insertLast('Boomer');
ll.insertLast('Helo');
ll.insertLast('Husker');
ll.insertLast('Starbuck');
ll.insertLast('Tauhida');
utils.print(ll);

console.log('Removing Husker');
ll.remove('Husker');
utils.print(ll);

console.log('Inserting Athena before Boomer');
ll.insertBefore('Boomer', 'Athena');
utils.print(ll);

console.log('Inserting Hotdog after Helo');
ll.insertAfter('Helo', 'Hotdog');
utils.print(ll);

console.log('Inserting Kat at 3rd position');
ll.insertAt(2, 'Kat');
utils.print(ll);

console.log('Removing Tauhida');
ll.remove('Tauhida');
utils.print(ll);

console.log('Size: ' + utils.size(ll));

console.log('Is empty: ' + utils.isEmpty(ll));

console.log('Find prev Boomer: ' + utils.findPrevious(ll, 'Boomer'));

console.log('Find last: ' + utils.findLast(ll));
