const reverseString = str => {
  if (str.length === 1) return str;
  return reverseString(str.substr(1)) + str.substr(0, 1);
};

console.log(reverseString(process.argv[2]));
