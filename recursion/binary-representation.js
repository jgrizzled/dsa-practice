const binaryRepresentation = n => {
  if (n < 1) return '0';
  const highestExp = Math.floor(Math.log2(n));
  const digitValue = 2 ** highestExp;
  const remainder = n - digitValue;
  const nextExp = Math.floor(Math.log2(remainder));
  const zeroes = highestExp - nextExp;
  if (remainder > 0)
    return (
      '1' +
      Array(zeroes - 1)
        .fill(0)
        .join('') +
      binaryRepresentation(remainder)
    );
  else return '1' + Array(highestExp).fill(0).join('');
};

// test
for (let i = 0; i < 2 ** 16; i++) {
  const bin = Number(i).toString(2);
  const myBin = binaryRepresentation(i);
  if (bin !== myBin) {
    console.log(`Error: expected '${bin}', got '${myBin}' for ${i}`);
    break;
  }
}
