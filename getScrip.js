const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const getCollection = spec => {
  let table = [];
  for (let i in spec) {
    for (let j = 0; j < spec[i] * 1000; j++) {
      table.push(i);
    }
  }
  return () => {
    return table[Math.floor(Math.random() * table.length)];
  }
}
