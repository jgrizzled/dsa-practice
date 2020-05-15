const stackLib = require('./stack');

const starTrek = new stackLib.Stack();

console.log('Creating stack');
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
stackLib.print(starTrek);

console.log('Removing McCoy');
starTrek.pop();
starTrek.pop();
stackLib.print(starTrek);

const is_palindrome = s => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let j = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    // O(n/2)
    if (s[j] !== s[i]) return false;
    j--;
  }
  return true;
};

console.log('Palindrome test expects: true, true, true, false');
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
