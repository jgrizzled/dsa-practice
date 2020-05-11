const countSheep = amount => {
  if (amount > 0) {
    console.log(`${amount}: Another sheep jumps over the fence`);
    countSheep(amount - 1);
  } else console.log('All sheep jumped over the fence');
};

countSheep(process.argv[2]);
