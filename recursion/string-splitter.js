const stringSplitter = (str, separator) => {
  if (str.length <= 1) {
    if (str !== separator) return [str];
    else return [];
  }
  const index = str.search(separator);
  if (index !== -1) {
    const part = str.substr(0, index);
    const remaining = str.substr(index + separator.length);
    return [part, ...stringSplitter(remaining, separator)];
  } else return [str];
};

console.log(stringSplitter(process.argv[2], process.argv[3]));
