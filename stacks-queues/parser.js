const { peek, Stack, isEmpty } = require('./stack');

// parse expression and error if nonmatching brackets/quotes/parenthesis
const parse = exp => {
  const expectedChars = new Stack();
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const quotes = ['"', "'"];
  let inQuote = false;
  for (let i = 0; i < exp.length; i++) {
    if (inQuote) {
      if (exp[i] === peek(expectedChars)) {
        expectedChars.pop();
        inQuote = false;
      }
    } else {
      if (quotes.includes(exp[i])) {
        expectedChars.push(exp[i]);
        inQuote = true;
      } else if (bracketMap[exp[i]]) {
        expectedChars.push(bracketMap[exp[i]]);
      } else if (exp[i] === peek(expectedChars)) {
        expectedChars.pop();
      } else if (Object.values(bracketMap).includes(exp[i]))
        throw new Error('Unexpected ' + exp[i]);
    }
  }
  if (!isEmpty(expectedChars)) {
    throw new Error('Expected ' + peek(expectedChars));
  }
  return true;
};

console.log(parse(process.argv[2]));
