const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// for n times an element appears in a distribution, an arr is filled n times
// with a lookup key, then a random num is selected from that arr

const getWeightedRandomNum = spec => {
  let table = [];
  for (let i in spec) { // the object keys
    for (let j = 0; j < spec[i] * 1000; j++) {
      table.push(i);
    }
  }
  return () => {
    return table[Math.floor(Math.random() * table.length)];
  }
}

const collectionSpec = {
  0: .4797,
  1: .1633,
  2: .2147,
  3: .1175,
  4: .0248
};

const getCollection = getWeightedRandomNum(collectionSpec);


// // test out distribution
// let testDist = []
// for (let i = 0; i < 100; i++) {
//   testDist.push(getCollection());
// }

// console.log(testDist.reduce((a,b)=>a.set(b,a.get(b)+1||1),new Map))


