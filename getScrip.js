const getRandomVerse = max => {
  return Math.floor(Math.random() * max) + 1;
}

// for n times an element appears in a distribution, an arr is filled n times
// with a lookup key, then a random num is selected from that arr
const getWeightedRandomNum = spec => {
  let table = [];
  for (let i in spec) { // the object keys
    for (let j = 0; j < spec[i] * 10000; j++) { // 10000 since we're rounding to the ten-thousandth
      table.push(i);
    }
  }
  return () => {
    return table[Math.floor(Math.random() * table.length)];
  }
}

const collectionSpec = {
  ot: .4797,
  nt: .1633,
  bom: .2147,
  dc: .1175,
  p: .0248
};
let bookSpec = {};
let book;
let chapterSpec = {};
let chapter;
let verse;

if (getWeightedRandomNum(collectionSpec)() === 'ot') {
  bookSpec = {
    genesis: .0659,
    exodus: .0566,
    leviticus: .0380,
    numbers: .0524,
    deuteronomy: .0473,
    joshua: .0296,
    judges: .0279,
    ruth: .0042,
    samuel1: .0380,
    samuel2: .0304,
    kings1: .0380,
    kings2: .0346,
    chronicles1: .0329,
    chronicles2: .0397,
    ezra: .0118,
    nehemiah: .0169,
    esther: .0084,
    job: .0304,
    psalms: .0819,
    proverbs: .0287,
    ecclesiastes: .0093,
    songOfSolomon: .0042,
    isaiah: .0676,
    jeremiah: .0667,
    lamentations: .0051,
    ezekiel: .0616,
    daniel: .0186,
    hosea: .0093,
    joel: .0042,
    amos: .0076,
    obadiah: .0008,
    jonah: .0025,
    micah: .0051,
    nahum: .0025,
    habakkuk: .0025,
    zephaniah: .0025,
    haggai: .0025,
    zechariah : .0101,
    malachi: .0051
  };

} else if (getWeightedRandomNum(collectionSpec)() === 'nt') {
  bookSpec = {
    matthew: .1365,
    mark: .0744,
    luke: .1315,
    john: .1017,
    acts: .1241,
    romans: .0571,
    corinthians1: .0546,
    corinthians2: .0322,
    galatians: .0174,
    ephesians: .0174,
    philippians: .0124,
    colossians: .0149,
    thessalonians1: .0124,
    thessalonians2: .0050,
    timothy1: .0174,
    timothy2: .0124,
    titus: .0050,
    philemon: .0025,
    hebrews: .0422,
    james: .0149,
    peter1: .0174,
    peter2: .0124,
    john1: .0149,
    john2: .0025,
    john3: .0025,
    jude: .0050,
    revelation: .0595
  };

} else if (getWeightedRandomNum(collectionSpec)() === 'bom') {
  bookSpec = {
    nephi1: .0991,
    nephi2: .1207,
    jacob: .0349,
    enos: .0047,
    jarom: .0038,
    omni: .0057,
    wordsOfMormon: .0038,
    mosiah: .1170,
    alma: .3038,
    helaman: .0717,
    nephi3: .1094,
    nephi4: .0075,
    mormon: .0349,
    ether: .0585,
    moroni: .0258,
  };

  if (getWeightedRandomNum(bookSpec)() === 'nephi1') {
    chapterSpec = {
      1: parseFloat((20/618).toFixed(4)),
      2: parseFloat((24/618).toFixed(4)),
      3: parseFloat((31/618).toFixed(4)),
      4: parseFloat((38/618).toFixed(4)),
      5: parseFloat((22/618).toFixed(4)),
      6: parseFloat((6/618).toFixed(4)),
      7: parseFloat((22/618).toFixed(4)),
      8: parseFloat((38/618).toFixed(4)),
      9: parseFloat((6/618).toFixed(4)),
      10: parseFloat((22/618).toFixed(4)),
      11: parseFloat((36/618).toFixed(4)),
      12: parseFloat((23/618).toFixed(4)),
      13: parseFloat((42/618).toFixed(4)),
      14: parseFloat((30/618).toFixed(4)),
      15: parseFloat((36/618).toFixed(4)),
      16: parseFloat((39/618).toFixed(4)),
      17: parseFloat((55/618).toFixed(4)),
      18: parseFloat((25/618).toFixed(4)),
      19: parseFloat((24/618).toFixed(4)),
      20: parseFloat((22/618).toFixed(4)),
      21: parseFloat((26/618).toFixed(4)),
      22: parseFloat((31/618).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(20)
    } else if (chapter === 2) {
      verse = getRandomVerse(24)
    } else if (chapter === 3) {
      verse = getRandomVerse(31)
    } else if (chapter === 4) {
      verse = getRandomVerse(38)
    } else if (chapter === 5) {
      verse = getRandomVerse(22)
    } else if (chapter === 6) {
      verse = getRandomVerse(6)
    } else if (chapter === 7) {
      verse = getRandomVerse(22)
    } else if (chapter === 8) {
      verse = getRandomVerse(38)
    } else if (chapter === 9) {
      verse = getRandomVerse(6)
    } else if (chapter === 10) {
      verse = getRandomVerse(22)
    } else if (chapter === 11) {
      verse = getRandomVerse(36)
    } else if (chapter === 12) {
      verse = getRandomVerse(23)
    } else if (chapter === 13) {
      verse = getRandomVerse(42)
    } else if (chapter === 14) {
      verse = getRandomVerse(30)
    } else if (chapter === 15) {
      verse = getRandomVerse(36)
    } else if (chapter === 16) {
      verse = getRandomVerse(39)
    } else if (chapter === 17) {
      verse = getRandomVerse(55)
    } else if (chapter === 18) {
      verse = getRandomVerse(25)
    } else if (chapter === 19) {
      verse = getRandomVerse(24)
    } else if (chapter === 20) {
      verse = getRandomVerse(22)
    } else if (chapter === 21) {
      verse = getRandomVerse(26)
    } else if (chapter === 22) {
      verse = getRandomVerse(31)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'nephi2') {
    chapterSpec = {
      1: parseFloat((32/779).toFixed(4)),
      2: parseFloat((30/779).toFixed(4)),
      3: parseFloat((25/779).toFixed(4)),
      4: parseFloat((35/779).toFixed(4)),
      5: parseFloat((34/779).toFixed(4)),
      6: parseFloat((18/779).toFixed(4)),
      7: parseFloat((11/779).toFixed(4)),
      8: parseFloat((25/779).toFixed(4)),
      9: parseFloat((54/779).toFixed(4)),
      10: parseFloat((25/779).toFixed(4)),
      11: parseFloat((8/779).toFixed(4)),
      12: parseFloat((22/779).toFixed(4)),
      13: parseFloat((26/779).toFixed(4)),
      14: parseFloat((6/779).toFixed(4)),
      15: parseFloat((30/779).toFixed(4)),
      16: parseFloat((13/779).toFixed(4)),
      17: parseFloat((25/779).toFixed(4)),
      18: parseFloat((22/779).toFixed(4)),
      19: parseFloat((21/779).toFixed(4)),
      20: parseFloat((34/779).toFixed(4)),
      21: parseFloat((16/779).toFixed(4)),
      22: parseFloat((6/779).toFixed(4)),
      23: parseFloat((22/779).toFixed(4)),
      24: parseFloat((32/779).toFixed(4)),
      25: parseFloat((30/779).toFixed(4)),
      26: parseFloat((33/779).toFixed(4)),
      27: parseFloat((35/779).toFixed(4)),
      28: parseFloat((32/779).toFixed(4)),
      29: parseFloat((14/779).toFixed(4)),
      30: parseFloat((18/779).toFixed(4)),
      31: parseFloat((21/779).toFixed(4)),
      32: parseFloat((9/779).toFixed(4)),
      33: parseFloat((15/779).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(32)
    } else if (chapter === 2) {
      verse = getRandomVerse(30)
    } else if (chapter === 3) {
      verse = getRandomVerse(25)
    } else if (chapter === 4) {
      verse = getRandomVerse(35)
    } else if (chapter === 5) {
      verse = getRandomVerse(34)
    } else if (chapter === 6) {
      verse = getRandomVerse(18)
    } else if (chapter === 7) {
      verse = getRandomVerse(11)
    } else if (chapter === 8) {
      verse = getRandomVerse(25)
    } else if (chapter === 9) {
      verse = getRandomVerse(54)
    } else if (chapter === 10) {
      verse = getRandomVerse(25)
    } else if (chapter === 11) {
      verse = getRandomVerse(8)
    } else if (chapter === 12) {
      verse = getRandomVerse(22)
    } else if (chapter === 13) {
      verse = getRandomVerse(26)
    } else if (chapter === 14) {
      verse = getRandomVerse(6)
    } else if (chapter === 15) {
      verse = getRandomVerse(30)
    } else if (chapter === 16) {
      verse = getRandomVerse(13)
    } else if (chapter === 17) {
      verse = getRandomVerse(25)
    } else if (chapter === 18) {
      verse = getRandomVerse(22)
    } else if (chapter === 19) {
      verse = getRandomVerse(21)
    } else if (chapter === 20) {
      verse = getRandomVerse(34)
    } else if (chapter === 21) {
      verse = getRandomVerse(16)
    } else if (chapter === 22) {
      verse = getRandomVerse(6)
    } else if (chapter === 23) {
      verse = getRandomVerse(22)
    } else if (chapter === 24) {
      verse = getRandomVerse(32)
    } else if (chapter === 25) {
      verse = getRandomVerse(30)
    } else if (chapter === 26) {
      verse = getRandomVerse(33)
    } else if (chapter === 27) {
      verse = getRandomVerse(35)
    } else if (chapter === 28) {
      verse = getRandomVerse(32)
    } else if (chapter === 29) {
      verse = getRandomVerse(14)
    } else if (chapter === 30) {
      verse = getRandomVerse(18)
    } else if (chapter === 31) {
      verse = getRandomVerse(21)
    } else if (chapter === 32) {
      verse = getRandomVerse(9)
    } else if (chapter === 33) {
      verse = getRandomVerse(15)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'jacob') {
    chapterSpec = {
      1: parseFloat((19/203).toFixed(4)),
      2: parseFloat((35/203).toFixed(4)),
      3: parseFloat((14/203).toFixed(4)),
      4: parseFloat((18/203).toFixed(4)),
      5: parseFloat((77/203).toFixed(4)),
      6: parseFloat((6/203).toFixed(4)),
      7: parseFloat((27/203).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(19)
    } else if (chapter === 2) {
      verse = getRandomVerse(35)
    } else if (chapter === 3) {
      verse = getRandomVerse(14)
    } else if (chapter === 4) {
      verse = getRandomVerse(18)
    } else if (chapter === 5) {
      verse = getRandomVerse(77)
    } else if (chapter === 6) {
      verse = getRandomVerse(6)
    } else if (chapter === 7) {
      verse = getRandomVerse(27)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'enos') {
    chapter = 1
    verse = getRandomVerse(27)

  } else if (getWeightedRandomNum(bookSpec)() === 'jarom') {
    chapter = 1
    verse = getRandomVerse(15)

  } else if (getWeightedRandomNum(bookSpec)() === 'omni') {
    chapter = 1
    verse = getRandomVerse(30)

  } else if (getWeightedRandomNum(bookSpec)() === 'wordsOfMormon') {
    chapter = 1
    verse = getRandomVerse(18)

  } else if (getWeightedRandomNum(bookSpec)() === 'mosiah') {
    chapterSpec = {
      1: parseFloat((18/785).toFixed(4)),
      2: parseFloat((41/785).toFixed(4)),
      3: parseFloat((27/785).toFixed(4)),
      4: parseFloat((30/785).toFixed(4)),
      5: parseFloat((15/785).toFixed(4)),
      6: parseFloat((7/785).toFixed(4)),
      7: parseFloat((33/785).toFixed(4)),
      8: parseFloat((21/785).toFixed(4)),
      9: parseFloat((19/785).toFixed(4)),
      10: parseFloat((22/785).toFixed(4)),
      11: parseFloat((29/785).toFixed(4)),
      12: parseFloat((37/785).toFixed(4)),
      13: parseFloat((35/785).toFixed(4)),
      14: parseFloat((12/785).toFixed(4)),
      15: parseFloat((31/785).toFixed(4)),
      16: parseFloat((15/785).toFixed(4)),
      17: parseFloat((20/785).toFixed(4)),
      18: parseFloat((35/785).toFixed(4)),
      19: parseFloat((29/785).toFixed(4)),
      20: parseFloat((26/785).toFixed(4)),
      21: parseFloat((36/785).toFixed(4)),
      22: parseFloat((16/785).toFixed(4)),
      23: parseFloat((39/785).toFixed(4)),
      24: parseFloat((25/785).toFixed(4)),
      25: parseFloat((24/785).toFixed(4)),
      26: parseFloat((39/785).toFixed(4)),
      27: parseFloat((37/785).toFixed(4)),
      28: parseFloat((20/785).toFixed(4)),
      29: parseFloat((47/785).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(18)
    } else if (chapter === 2) {
      verse = getRandomVerse(41)
    } else if (chapter === 3) {
      verse = getRandomVerse(27)
    } else if (chapter === 4) {
      verse = getRandomVerse(30)
    } else if (chapter === 5) {
      verse = getRandomVerse(15)
    } else if (chapter === 6) {
      verse = getRandomVerse(7)
    } else if (chapter === 7) {
      verse = getRandomVerse(33)
    } else if (chapter === 8) {
      verse = getRandomVerse(21)
    } else if (chapter === 9) {
      verse = getRandomVerse(19)
    } else if (chapter === 10) {
      verse = getRandomVerse(22)
    } else if (chapter === 11) {
      verse = getRandomVerse(29)
    } else if (chapter === 12) {
      verse = getRandomVerse(37)
    } else if (chapter === 13) {
      verse = getRandomVerse(35)
    } else if (chapter === 14) {
      verse = getRandomVerse(12)
    } else if (chapter === 15) {
      verse = getRandomVerse(31)
    } else if (chapter === 16) {
      verse = getRandomVerse(15)
    } else if (chapter === 17) {
      verse = getRandomVerse(20)
    } else if (chapter === 18) {
      verse = getRandomVerse(35)
    } else if (chapter === 19) {
      verse = getRandomVerse(29)
    } else if (chapter === 20) {
      verse = getRandomVerse(26)
    } else if (chapter === 21) {
      verse = getRandomVerse(36)
    } else if (chapter === 22) {
      verse = getRandomVerse(16)
    } else if (chapter === 23) {
      verse = getRandomVerse(39)
    } else if (chapter === 24) {
      verse = getRandomVerse(25)
    } else if (chapter === 25) {
      verse = getRandomVerse(24)
    } else if (chapter === 26) {
      verse = getRandomVerse(39)
    } else if (chapter === 27) {
      verse = getRandomVerse(37)
    } else if (chapter === 28) {
      verse = getRandomVerse(20)
    } else if (chapter === 29) {
      verse = getRandomVerse(47)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'alma') {
    chapterSpec = {
      1: parseFloat((33/1975).toFixed(4)),
      2: parseFloat((38/1975).toFixed(4)),
      3: parseFloat((27/1975).toFixed(4)),
      4: parseFloat((20/1975).toFixed(4)),
      5: parseFloat((62/1975).toFixed(4)),
      6: parseFloat((8/1975).toFixed(4)),
      7: parseFloat((27/1975).toFixed(4)),
      8: parseFloat((32/1975).toFixed(4)),
      9: parseFloat((34/1975).toFixed(4)),
      10: parseFloat((32/1975).toFixed(4)),
      11: parseFloat((46/1975).toFixed(4)),
      12: parseFloat((37/1975).toFixed(4)),
      13: parseFloat((31/1975).toFixed(4)),
      14: parseFloat((29/1975).toFixed(4)),
      15: parseFloat((19/1975).toFixed(4)),
      16: parseFloat((21/1975).toFixed(4)),
      17: parseFloat((39/1975).toFixed(4)),
      18: parseFloat((43/1975).toFixed(4)),
      19: parseFloat((36/1975).toFixed(4)),
      20: parseFloat((30/1975).toFixed(4)),
      21: parseFloat((23/1975).toFixed(4)),
      22: parseFloat((35/1975).toFixed(4)),
      23: parseFloat((18/1975).toFixed(4)),
      24: parseFloat((30/1975).toFixed(4)),
      25: parseFloat((17/1975).toFixed(4)),
      26: parseFloat((37/1975).toFixed(4)),
      27: parseFloat((30/1975).toFixed(4)),
      28: parseFloat((14/1975).toFixed(4)),
      29: parseFloat((17/1975).toFixed(4)),
      30: parseFloat((60/1975).toFixed(4)),
      31: parseFloat((38/1975).toFixed(4)),
      32: parseFloat((43/1975).toFixed(4)),
      33: parseFloat((23/1975).toFixed(4)),
      34: parseFloat((41/1975).toFixed(4)),
      35: parseFloat((16/1975).toFixed(4)),
      36: parseFloat((30/1975).toFixed(4)),
      37: parseFloat((47/1975).toFixed(4)),
      38: parseFloat((15/1975).toFixed(4)),
      39: parseFloat((19/1975).toFixed(4)),
      40: parseFloat((26/1975).toFixed(4)),
      41: parseFloat((15/1975).toFixed(4)),
      42: parseFloat((31/1975).toFixed(4)),
      43: parseFloat((54/1975).toFixed(4)),
      44: parseFloat((24/1975).toFixed(4)),
      45: parseFloat((24/1975).toFixed(4)),
      46: parseFloat((41/1975).toFixed(4)),
      47: parseFloat((36/1975).toFixed(4)),
      48: parseFloat((25/1975).toFixed(4)),
      49: parseFloat((30/1975).toFixed(4)),
      50: parseFloat((40/1975).toFixed(4)),
      51: parseFloat((37/1975).toFixed(4)),
      52: parseFloat((40/1975).toFixed(4)),
      53: parseFloat((23/1975).toFixed(4)),
      54: parseFloat((24/1975).toFixed(4)),
      55: parseFloat((35/1975).toFixed(4)),
      56: parseFloat((57/1975).toFixed(4)),
      57: parseFloat((36/1975).toFixed(4)),
      58: parseFloat((41/1975).toFixed(4)),
      59: parseFloat((13/1975).toFixed(4)),
      60: parseFloat((36/1975).toFixed(4)),
      61: parseFloat((21/1975).toFixed(4)),
      62: parseFloat((52/1975).toFixed(4)),
      63: parseFloat((17/1975).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(33)
    } else if (chapter === 2) {
      verse = getRandomVerse(38)
    } else if (chapter === 3) {
      verse = getRandomVerse(27)
    } else if (chapter === 4) {
      verse = getRandomVerse(20)
    } else if (chapter === 5) {
      verse = getRandomVerse(62)
    } else if (chapter === 6) {
      verse = getRandomVerse(8)
    } else if (chapter === 7) {
      verse = getRandomVerse(27)
    } else if (chapter === 8) {
      verse = getRandomVerse(32)
    } else if (chapter === 9) {
      verse = getRandomVerse(34)
    } else if (chapter === 10) {
      verse = getRandomVerse(32)
    } else if (chapter === 11) {
      verse = getRandomVerse(46)
    } else if (chapter === 12) {
      verse = getRandomVerse(37)
    } else if (chapter === 13) {
      verse = getRandomVerse(31)
    } else if (chapter === 14) {
      verse = getRandomVerse(29)
    } else if (chapter === 15) {
      verse = getRandomVerse(19)
    } else if (chapter === 16) {
      verse = getRandomVerse(21)
    } else if (chapter === 17) {
      verse = getRandomVerse(39)
    } else if (chapter === 18) {
      verse = getRandomVerse(43)
    } else if (chapter === 19) {
      verse = getRandomVerse(36)
    } else if (chapter === 20) {
      verse = getRandomVerse(30)
    } else if (chapter === 21) {
      verse = getRandomVerse(23)
    } else if (chapter === 22) {
      verse = getRandomVerse(35)
    } else if (chapter === 23) {
      verse = getRandomVerse(18)
    } else if (chapter === 24) {
      verse = getRandomVerse(30)
    } else if (chapter === 25) {
      verse = getRandomVerse(17)
    } else if (chapter === 26) {
      verse = getRandomVerse(37)
    } else if (chapter === 27) {
      verse = getRandomVerse(30)
    } else if (chapter === 28) {
      verse = getRandomVerse(14)
    } else if (chapter === 29) {
      verse = getRandomVerse(17)
    } else if (chapter === 30) {
      verse = getRandomVerse(60)
    } else if (chapter === 31) {
      verse = getRandomVerse(38)
    } else if (chapter === 32) {
      verse = getRandomVerse(43)
    } else if (chapter === 33) {
      verse = getRandomVerse(23)
    } else if (chapter === 34) {
      verse = getRandomVerse(41)
    } else if (chapter === 35) {
      verse = getRandomVerse(16)
    } else if (chapter === 36) {
      verse = getRandomVerse(30)
    } else if (chapter === 37) {
      verse = getRandomVerse(47)
    } else if (chapter === 38) {
      verse = getRandomVerse(15)
    } else if (chapter === 39) {
      verse = getRandomVerse(19)
    } else if (chapter === 40) {
      verse = getRandomVerse(26)
    } else if (chapter === 41) {
      verse = getRandomVerse(15)
    } else if (chapter === 42) {
      verse = getRandomVerse(31)
    } else if (chapter === 43) {
      verse = getRandomVerse(54)
    } else if (chapter === 44) {
      verse = getRandomVerse(24)
    } else if (chapter === 45) {
      verse = getRandomVerse(24)
    } else if (chapter === 46) {
      verse = getRandomVerse(41)
    } else if (chapter === 47) {
      verse = getRandomVerse(36)
    } else if (chapter === 48) {
      verse = getRandomVerse(25)
    } else if (chapter === 49) {
      verse = getRandomVerse(30)
    } else if (chapter === 50) {
      verse = getRandomVerse(40)
    } else if (chapter === 51) {
      verse = getRandomVerse(37)
    } else if (chapter === 52) {
      verse = getRandomVerse(40)
    } else if (chapter === 53) {
      verse = getRandomVerse(23)
    } else if (chapter === 54) {
      verse = getRandomVerse(24)
    } else if (chapter === 55) {
      verse = getRandomVerse(35)
    } else if (chapter === 56) {
      verse = getRandomVerse(57)
    } else if (chapter === 57) {
      verse = getRandomVerse(36)
    } else if (chapter === 58) {
      verse = getRandomVerse(41)
    } else if (chapter === 59) {
      verse = getRandomVerse(13)
    } else if (chapter === 60) {
      verse = getRandomVerse(36)
    } else if (chapter === 61) {
      verse = getRandomVerse(21)
    } else if (chapter === 62) {
      verse = getRandomVerse(52)
    } else if (chapter === 63) {
      verse = getRandomVerse(17)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'helaman') {
    chapterSpec = {
      1: parseFloat((34/497).toFixed(4)),
      2: parseFloat((14/497).toFixed(4)),
      3: parseFloat((37/497).toFixed(4)),
      4: parseFloat((26/497).toFixed(4)),
      5: parseFloat((52/497).toFixed(4)),
      6: parseFloat((41/497).toFixed(4)),
      7: parseFloat((29/497).toFixed(4)),
      8: parseFloat((28/497).toFixed(4)),
      9: parseFloat((41/497).toFixed(4)),
      10: parseFloat((19/497).toFixed(4)),
      11: parseFloat((38/497).toFixed(4)),
      12: parseFloat((26/497).toFixed(4)),
      13: parseFloat((39/497).toFixed(4)),
      14: parseFloat((31/497).toFixed(4)),
      15: parseFloat((17/497).toFixed(4)),
      16: parseFloat((25/497).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(34)
    } else if (chapter === 2) {
      verse = getRandomVerse(14)
    } else if (chapter === 3) {
      verse = getRandomVerse(37)
    } else if (chapter === 4) {
      verse = getRandomVerse(26)
    } else if (chapter === 5) {
      verse = getRandomVerse(52)
    } else if (chapter === 6) {
      verse = getRandomVerse(41)
    } else if (chapter === 7) {
      verse = getRandomVerse(29)
    } else if (chapter === 8) {
      verse = getRandomVerse(28)
    } else if (chapter === 9) {
      verse = getRandomVerse(41)
    } else if (chapter === 10) {
      verse = getRandomVerse(19)
    } else if (chapter === 11) {
      verse = getRandomVerse(38)
    } else if (chapter === 12) {
      verse = getRandomVerse(26)
    } else if (chapter === 13) {
      verse = getRandomVerse(39)
    } else if (chapter === 14) {
      verse = getRandomVerse(31)
    } else if (chapter === 15) {
      verse = getRandomVerse(17)
    } else if (chapter === 16) {
      verse = getRandomVerse(25)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'nephi3') {
    chapterSpec = {
      1: parseFloat((30/785).toFixed(4)),
      2: parseFloat((19/785).toFixed(4)),
      3: parseFloat((26/785).toFixed(4)),
      4: parseFloat((33/785).toFixed(4)),
      5: parseFloat((26/785).toFixed(4)),
      6: parseFloat((30/785).toFixed(4)),
      7: parseFloat((26/785).toFixed(4)),
      8: parseFloat((25/785).toFixed(4)),
      9: parseFloat((22/785).toFixed(4)),
      10: parseFloat((19/785).toFixed(4)),
      11: parseFloat((41/785).toFixed(4)),
      12: parseFloat((48/785).toFixed(4)),
      13: parseFloat((34/785).toFixed(4)),
      14: parseFloat((27/785).toFixed(4)),
      15: parseFloat((24/785).toFixed(4)),
      16: parseFloat((20/785).toFixed(4)),
      17: parseFloat((25/785).toFixed(4)),
      18: parseFloat((39/785).toFixed(4)),
      19: parseFloat((36/785).toFixed(4)),
      20: parseFloat((46/785).toFixed(4)),
      21: parseFloat((29/785).toFixed(4)),
      22: parseFloat((17/785).toFixed(4)),
      23: parseFloat((14/785).toFixed(4)),
      24: parseFloat((18/785).toFixed(4)),
      25: parseFloat((6/785).toFixed(4)),
      26: parseFloat((21/785).toFixed(4)),
      27: parseFloat((33/785).toFixed(4)),
      28: parseFloat((40/785).toFixed(4)),
      29: parseFloat((9/785).toFixed(4)),
      30: parseFloat((2/785).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(30)
    } else if (chapter === 2) {
      verse = getRandomVerse(19)
    } else if (chapter === 3) {
      verse = getRandomVerse(26)
    } else if (chapter === 4) {
      verse = getRandomVerse(33)
    } else if (chapter === 5) {
      verse = getRandomVerse(26)
    } else if (chapter === 6) {
      verse = getRandomVerse(30)
    } else if (chapter === 7) {
      verse = getRandomVerse(26)
    } else if (chapter === 8) {
      verse = getRandomVerse(25)
    } else if (chapter === 9) {
      verse = getRandomVerse(22)
    } else if (chapter === 10) {
      verse = getRandomVerse(19)
    } else if (chapter === 11) {
      verse = getRandomVerse(41)
    } else if (chapter === 12) {
      verse = getRandomVerse(48)
    } else if (chapter === 13) {
      verse = getRandomVerse(34)
    } else if (chapter === 14) {
      verse = getRandomVerse(27)
    } else if (chapter === 15) {
      verse = getRandomVerse(24)
    } else if (chapter === 16) {
      verse = getRandomVerse(20)
    } else if (chapter === 17) {
      verse = getRandomVerse(25)
    } else if (chapter === 18) {
      verse = getRandomVerse(39)
    } else if (chapter === 19) {
      verse = getRandomVerse(36)
    } else if (chapter === 20) {
      verse = getRandomVerse(46)
    } else if (chapter === 21) {
      verse = getRandomVerse(29)
    } else if (chapter === 22) {
      verse = getRandomVerse(17)
    } else if (chapter === 23) {
      verse = getRandomVerse(14)
    } else if (chapter === 24) {
      verse = getRandomVerse(18)
    } else if (chapter === 25) {
      verse = getRandomVerse(6)
    } else if (chapter === 26) {
      verse = getRandomVerse(21)
    } else if (chapter === 27) {
      verse = getRandomVerse(33)
    } else if (chapter === 28) {
      verse = getRandomVerse(40)
    } else if (chapter === 29) {
      verse = getRandomVerse(9)
    } else if (chapter === 30) {
      verse = getRandomVerse(2)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'nephi4') {
    chapter = 1
    verse = getRandomVerse(49)

  } else if (getWeightedRandomNum(bookSpec)() === 'mormon') {
    chapterSpec = {
      1: parseFloat((19/227).toFixed(4)),
      2: parseFloat((29/227).toFixed(4)),
      3: parseFloat((22/227).toFixed(4)),
      4: parseFloat((23/227).toFixed(4)),
      5: parseFloat((24/227).toFixed(4)),
      6: parseFloat((22/227).toFixed(4)),
      7: parseFloat((10/227).toFixed(4)),
      8: parseFloat((41/227).toFixed(4)),
      9: parseFloat((37/227).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(19)
    } else if (chapter === 2) {
      verse = getRandomVerse(29)
    } else if (chapter === 3) {
      verse = getRandomVerse(22)
    } else if (chapter === 4) {
      verse = getRandomVerse(23)
    } else if (chapter === 5) {
      verse = getRandomVerse(24)
    } else if (chapter === 6) {
      verse = getRandomVerse(22)
    } else if (chapter === 7) {
      verse = getRandomVerse(10)
    } else if (chapter === 8) {
      verse = getRandomVerse(41)
    } else if (chapter === 9) {
      verse = getRandomVerse(37)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'ether') {
    chapterSpec = {
      1: parseFloat((43/433).toFixed(4)),
      2: parseFloat((25/433).toFixed(4)),
      3: parseFloat((28/433).toFixed(4)),
      4: parseFloat((19/433).toFixed(4)),
      5: parseFloat((6/433).toFixed(4)),
      6: parseFloat((30/433).toFixed(4)),
      7: parseFloat((27/433).toFixed(4)),
      8: parseFloat((26/433).toFixed(4)),
      9: parseFloat((35/433).toFixed(4)),
      10: parseFloat((34/433).toFixed(4)),
      11: parseFloat((23/433).toFixed(4)),
      12: parseFloat((41/433).toFixed(4)),
      13: parseFloat((31/433).toFixed(4)),
      14: parseFloat((31/433).toFixed(4)),
      15: parseFloat((34/433).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(42)
    } else if (chapter === 2) {
      verse = getRandomVerse(25)
    } else if (chapter === 3) {
      verse = getRandomVerse(28)
    } else if (chapter === 4) {
      verse = getRandomVerse(19)
    } else if (chapter === 5) {
      verse = getRandomVerse(6)
    } else if (chapter === 6) {
      verse = getRandomVerse(30)
    } else if (chapter === 7) {
      verse = getRandomVerse(27)
    } else if (chapter === 8) {
      verse = getRandomVerse(26)
    } else if (chapter === 9) {
      verse = getRandomVerse(35)
    } else if (chapter === 10) {
      verse = getRandomVerse(34)
    } else if (chapter === 11) {
      verse = getRandomVerse(23)
    } else if (chapter === 12) {
      verse = getRandomVerse(41)
    } else if (chapter === 13) {
      verse = getRandomVerse(31)
    } else if (chapter === 14) {
      verse = getRandomVerse(31)
    } else if (chapter === 15) {
      verse = getRandomVerse(34)
    }

  } else if (getWeightedRandomNum(bookSpec)() === 'moroni') {
    chapterSpec = {
      1: parseFloat((4/263).toFixed(4)),
      2: parseFloat((3/263).toFixed(4)),
      3: parseFloat((4/263).toFixed(4)),
      4: parseFloat((3/263).toFixed(4)),
      5: parseFloat((2/263).toFixed(4)),
      6: parseFloat((9/263).toFixed(4)),
      7: parseFloat((48/263).toFixed(4)),
      8: parseFloat((30/263).toFixed(4)),
      9: parseFloat((26/263).toFixed(4)),
      10: parseFloat((34/263).toFixed(4))
    };

    chapter = Number(getWeightedRandomNum(chapterSpec)())

    if (chapter === 1) {
      verse = getRandomVerse(4)
    } else if (chapter === 2) {
      verse = getRandomVerse(3)
    } else if (chapter === 3) {
      verse = getRandomVerse(4)
    } else if (chapter === 4) {
      verse = getRandomVerse(3)
    } else if (chapter === 5) {
      verse = getRandomVerse(2)
    } else if (chapter === 6) {
      verse = getRandomVerse(9)
    } else if (chapter === 7) {
      verse = getRandomVerse(48)
    } else if (chapter === 8) {
      verse = getRandomVerse(30)
    } else if (chapter === 9) {
      verse = getRandomVerse(26)
    } else if (chapter === 10) {
      verse = getRandomVerse(34)
    }

  }

} else if (getWeightedRandomNum(collectionSpec)() === 'dc') {
  chapterSpec = {
    1: parseFloat((39/3654).toFixed(4)),
    2: parseFloat((3/3654).toFixed(4)),
    3: parseFloat((20/3654).toFixed(4)),
    4: parseFloat((7/3654).toFixed(4)),
    5: parseFloat((35/3654).toFixed(4)),
    6: parseFloat((37/3654).toFixed(4)),
    7: parseFloat((8/3654).toFixed(4)),
    8: parseFloat((12/3654).toFixed(4)),
    9: parseFloat((14/3654).toFixed(4)),
    10: parseFloat((70/3654).toFixed(4)),
    11: parseFloat((30/3654).toFixed(4)),
    12: parseFloat((9/3654).toFixed(4)),
    13: parseFloat((1/3654).toFixed(4)),
    14: parseFloat((11/3654).toFixed(4)),
    15: parseFloat((6/3654).toFixed(4)),
    16: parseFloat((6/3654).toFixed(4)),
    17: parseFloat((9/3654).toFixed(4)),
    18: parseFloat((47/3654).toFixed(4)),
    19: parseFloat((41/3654).toFixed(4)),
    20: parseFloat((84/3654).toFixed(4)),
    21: parseFloat((12/3654).toFixed(4)),
    22: parseFloat((4/3654).toFixed(4)),
    23: parseFloat((7/3654).toFixed(4)),
    24: parseFloat((19/3654).toFixed(4)),
    25: parseFloat((16/3654).toFixed(4)),
    26: parseFloat((2/3654).toFixed(4)),
    27: parseFloat((18/3654).toFixed(4)),
    28: parseFloat((16/3654).toFixed(4)),
    29: parseFloat((50/3654).toFixed(4)),
    30: parseFloat((11/3654).toFixed(4)),
    31: parseFloat((13/3654).toFixed(4)),
    32: parseFloat((5/3654).toFixed(4)),
    33: parseFloat((18/3654).toFixed(4)),
    34: parseFloat((12/3654).toFixed(4)),
    35: parseFloat((27/3654).toFixed(4)),
    36: parseFloat((8/3654).toFixed(4)),
    37: parseFloat((4/3654).toFixed(4)),
    38: parseFloat((42/3654).toFixed(4)),
    39: parseFloat((24/3654).toFixed(4)),
    40: parseFloat((3/3654).toFixed(4)),
    41: parseFloat((12/3654).toFixed(4)),
    42: parseFloat((93/3654).toFixed(4)),
    43: parseFloat((35/3654).toFixed(4)),
    44: parseFloat((6/3654).toFixed(4)),
    45: parseFloat((75/3654).toFixed(4)),
    46: parseFloat((33/3654).toFixed(4)),
    47: parseFloat((4/3654).toFixed(4)),
    48: parseFloat((6/3654).toFixed(4)),
    49: parseFloat((28/3654).toFixed(4)),
    50: parseFloat((46/3654).toFixed(4)),
    51: parseFloat((20/3654).toFixed(4)),
    52: parseFloat((44/3654).toFixed(4)),
    53: parseFloat((7/3654).toFixed(4)),
    54: parseFloat((10/3654).toFixed(4)),
    55: parseFloat((6/3654).toFixed(4)),
    56: parseFloat((20/3654).toFixed(4)),
    57: parseFloat((16/3654).toFixed(4)),
    58: parseFloat((65/3654).toFixed(4)),
    59: parseFloat((24/3654).toFixed(4)),
    60: parseFloat((17/3654).toFixed(4)),
    61: parseFloat((39/3654).toFixed(4)),
    62: parseFloat((9/3654).toFixed(4)),
    63: parseFloat((66/3654).toFixed(4)),
    64: parseFloat((43/3654).toFixed(4)),
    65: parseFloat((6/3654).toFixed(4)),
    66: parseFloat((13/3654).toFixed(4)),
    67: parseFloat((14/3654).toFixed(4)),
    68: parseFloat((35/3654).toFixed(4)),
    69: parseFloat((8/3654).toFixed(4)),
    70: parseFloat((18/3654).toFixed(4)),
    71: parseFloat((11/3654).toFixed(4)),
    72: parseFloat((26/3654).toFixed(4)),
    73: parseFloat((6/3654).toFixed(4)),
    74: parseFloat((7/3654).toFixed(4)),
    75: parseFloat((36/3654).toFixed(4)),
    76: parseFloat((119/3654).toFixed(4)),
    77: parseFloat((15/3654).toFixed(4)),
    78: parseFloat((22/3654).toFixed(4)),
    79: parseFloat((4/3654).toFixed(4)),
    80: parseFloat((5/3654).toFixed(4)),
    81: parseFloat((7/3654).toFixed(4)),
    82: parseFloat((24/3654).toFixed(4)),
    83: parseFloat((6/3654).toFixed(4)),
    84: parseFloat((120/3654).toFixed(4)),
    85: parseFloat((12/3654).toFixed(4)),
    86: parseFloat((11/3654).toFixed(4)),
    87: parseFloat((8/3654).toFixed(4)),
    88: parseFloat((141/3654).toFixed(4)),
    89: parseFloat((21/3654).toFixed(4)),
    90: parseFloat((37/3654).toFixed(4)),
    91: parseFloat((6/3654).toFixed(4)),
    92: parseFloat((2/3654).toFixed(4)),
    93: parseFloat((53/3654).toFixed(4)),
    94: parseFloat((17/3654).toFixed(4)),
    95: parseFloat((17/3654).toFixed(4)),
    96: parseFloat((9/3654).toFixed(4)),
    97: parseFloat((28/3654).toFixed(4)),
    98: parseFloat((48/3654).toFixed(4)),
    99: parseFloat((8/3654).toFixed(4)),
    100: parseFloat((17/3654).toFixed(4)),
    101: parseFloat((101/3654).toFixed(4)),
    102: parseFloat((34/3654).toFixed(4)),
    103: parseFloat((40/3654).toFixed(4)),
    104: parseFloat((86/3654).toFixed(4)),
    105: parseFloat((41/3654).toFixed(4)),
    106: parseFloat((8/3654).toFixed(4)),
    107: parseFloat((100/3654).toFixed(4)),
    108: parseFloat((8/3654).toFixed(4)),
    109: parseFloat((80/3654).toFixed(4)),
    110: parseFloat((16/3654).toFixed(4)),
    111: parseFloat((11/3654).toFixed(4)),
    112: parseFloat((34/3654).toFixed(4)),
    113: parseFloat((10/3654).toFixed(4)),
    114: parseFloat((2/3654).toFixed(4)),
    115: parseFloat((19/3654).toFixed(4)),
    116: parseFloat((1/3654).toFixed(4)),
    117: parseFloat((16/3654).toFixed(4)),
    118: parseFloat((6/3654).toFixed(4)),
    119: parseFloat((7/3654).toFixed(4)),
    120: parseFloat((1/3654).toFixed(4)),
    121: parseFloat((46/3654).toFixed(4)),
    122: parseFloat((9/3654).toFixed(4)),
    123: parseFloat((17/3654).toFixed(4)),
    124: parseFloat((145/3654).toFixed(4)),
    125: parseFloat((4/3654).toFixed(4)),
    126: parseFloat((3/3654).toFixed(4)),
    127: parseFloat((12/3654).toFixed(4)),
    128: parseFloat((25/3654).toFixed(4)),
    129: parseFloat((9/3654).toFixed(4)),
    130: parseFloat((23/3654).toFixed(4)),
    131: parseFloat((8/3654).toFixed(4)),
    132: parseFloat((66/3654).toFixed(4)),
    133: parseFloat((74/3654).toFixed(4)),
    134: parseFloat((12/3654).toFixed(4)),
    135: parseFloat((7/3654).toFixed(4)),
    136: parseFloat((42/3654).toFixed(4)),
    137: parseFloat((10/3654).toFixed(4)),
    138: parseFloat((60/3654).toFixed(4)),
  };

  chapter = Number(getWeightedRandomNum(chapterSpec)())

  if (chapter === 1) {
    verse = getRandomVerse(33)
  } else if (chapter === 2) {
    verse = getRandomVerse(38)
  } else if (chapter === 3) {
    verse = getRandomVerse(27)
  } else if (chapter === 4) {
    verse = getRandomVerse(20)
  } else if (chapter === 5) {
    verse = getRandomVerse(62)
  } else if (chapter === 6) {
    verse = getRandomVerse(8)
  } else if (chapter === 7) {
    verse = getRandomVerse(27)
  } else if (chapter === 8) {
    verse = getRandomVerse(32)
  } else if (chapter === 9) {
    verse = getRandomVerse(34)
  } else if (chapter === 10) {
    verse = getRandomVerse(32)
  } else if (chapter === 11) {
    verse = getRandomVerse(46)
  } else if (chapter === 12) {
    verse = getRandomVerse(37)
  } else if (chapter === 13) {
    verse = getRandomVerse(31)
  } else if (chapter === 14) {
    verse = getRandomVerse(29)
  } else if (chapter === 15) {
    verse = getRandomVerse(19)
  } else if (chapter === 16) {
    verse = getRandomVerse(21)
  } else if (chapter === 17) {
    verse = getRandomVerse(39)
  } else if (chapter === 18) {
    verse = getRandomVerse(43)
  } else if (chapter === 19) {
    verse = getRandomVerse(36)
  } else if (chapter === 20) {
    verse = getRandomVerse(30)
  } else if (chapter === 21) {
    verse = getRandomVerse(23)
  } else if (chapter === 22) {
    verse = getRandomVerse(35)
  } else if (chapter === 23) {
    verse = getRandomVerse(18)
  } else if (chapter === 24) {
    verse = getRandomVerse(30)
  } else if (chapter === 25) {
    verse = getRandomVerse(17)
  } else if (chapter === 26) {
    verse = getRandomVerse(37)
  } else if (chapter === 27) {
    verse = getRandomVerse(30)
  } else if (chapter === 28) {
    verse = getRandomVerse(14)
  } else if (chapter === 29) {
    verse = getRandomVerse(17)
  } else if (chapter === 30) {
    verse = getRandomVerse(60)
  } else if (chapter === 31) {
    verse = getRandomVerse(38)
  } else if (chapter === 32) {
    verse = getRandomVerse(43)
  } else if (chapter === 33) {
    verse = getRandomVerse(23)
  } else if (chapter === 34) {
    verse = getRandomVerse(41)
  } else if (chapter === 35) {
    verse = getRandomVerse(16)
  } else if (chapter === 36) {
    verse = getRandomVerse(30)
  } else if (chapter === 37) {
    verse = getRandomVerse(47)
  } else if (chapter === 38) {
    verse = getRandomVerse(15)
  } else if (chapter === 39) {
    verse = getRandomVerse(19)
  } else if (chapter === 40) {
    verse = getRandomVerse(26)
  } else if (chapter === 41) {
    verse = getRandomVerse(15)
  } else if (chapter === 42) {
    verse = getRandomVerse(31)
  } else if (chapter === 43) {
    verse = getRandomVerse(54)
  } else if (chapter === 44) {
    verse = getRandomVerse(24)
  } else if (chapter === 45) {
    verse = getRandomVerse(24)
  } else if (chapter === 46) {
    verse = getRandomVerse(41)
  } else if (chapter === 47) {
    verse = getRandomVerse(36)
  } else if (chapter === 48) {
    verse = getRandomVerse(25)
  } else if (chapter === 49) {
    verse = getRandomVerse(30)
  } else if (chapter === 50) {
    verse = getRandomVerse(40)
  } else if (chapter === 51) {
    verse = getRandomVerse(37)
  } else if (chapter === 52) {
    verse = getRandomVerse(40)
  } else if (chapter === 53) {
    verse = getRandomVerse(23)
  } else if (chapter === 54) {
    verse = getRandomVerse(24)
  } else if (chapter === 55) {
    verse = getRandomVerse(35)
  } else if (chapter === 56) {
    verse = getRandomVerse(57)
  } else if (chapter === 57) {
    verse = getRandomVerse(36)
  } else if (chapter === 58) {
    verse = getRandomVerse(41)
  } else if (chapter === 59) {
    verse = getRandomVerse(13)
  } else if (chapter === 60) {
    verse = getRandomVerse(36)
  } else if (chapter === 61) {
    verse = getRandomVerse(21)
  } else if (chapter === 62) {
    verse = getRandomVerse(52)
  } else if (chapter === 63) {
    verse = getRandomVerse(17)
  } else if (chapter === 64) {
    verse = getRandomVerse(17)
  } else if (chapter === 65) {
    verse = getRandomVerse(17)
  } else if (chapter === 66) {
    verse = getRandomVerse(17)
  } else if (chapter === 67) {
    verse = getRandomVerse(17)
  } else if (chapter === 68) {
    verse = getRandomVerse(17)
  } else if (chapter === 69) {
    verse = getRandomVerse(17)
  } else if (chapter === 70) {
    verse = getRandomVerse(17)
  } else if (chapter === 71) {
    verse = getRandomVerse(17)
  } else if (chapter === 72) {
    verse = getRandomVerse(17)
  } else if (chapter === 73) {
    verse = getRandomVerse(17)
  } else if (chapter === 74) {
    verse = getRandomVerse(17)
  } else if (chapter === 75) {
    verse = getRandomVerse(17)
  } else if (chapter === 76) {
    verse = getRandomVerse(17)
  } else if (chapter === 77) {
    verse = getRandomVerse(17)
  } else if (chapter === 78) {
    verse = getRandomVerse(17)
  } else if (chapter === 79) {
    verse = getRandomVerse(17)
  } else if (chapter === 80) {
    verse = getRandomVerse(17)
  } else if (chapter === 81) {
    verse = getRandomVerse(17)
  } else if (chapter === 82) {
    verse = getRandomVerse(17)
  } else if (chapter === 83) {
    verse = getRandomVerse(17)
  } else if (chapter === 84) {
    verse = getRandomVerse(17)
  } else if (chapter === 85) {
    verse = getRandomVerse(17)
  } else if (chapter === 86) {
    verse = getRandomVerse(17)
  } else if (chapter === 87) {
    verse = getRandomVerse(17)
  } else if (chapter === 88) {
    verse = getRandomVerse(17)
  } else if (chapter === 89) {
    verse = getRandomVerse(17)
  } else if (chapter === 90) {
    verse = getRandomVerse(17)
  } else if (chapter === 91) {
    verse = getRandomVerse(17)
  } else if (chapter === 92) {
    verse = getRandomVerse(17)
  } else if (chapter === 93) {
    verse = getRandomVerse(17)
  } else if (chapter === 94) {
    verse = getRandomVerse(17)
  } else if (chapter === 95) {
    verse = getRandomVerse(17)
  } else if (chapter === 96) {
    verse = getRandomVerse(17)
  } else if (chapter === 97) {
    verse = getRandomVerse(17)
  } else if (chapter === 98) {
    verse = getRandomVerse(17)
  } else if (chapter === 99) {
    verse = getRandomVerse(17)
  } else if (chapter === 100) {
    verse = getRandomVerse(17)
  } else if (chapter === 101) {
    verse = getRandomVerse(17)
  } else if (chapter === 102) {
    verse = getRandomVerse(17)
  } else if (chapter === 103) {
    verse = getRandomVerse(17)
  } else if (chapter === 104) {
    verse = getRandomVerse(17)
  } else if (chapter === 105) {
    verse = getRandomVerse(17)
  } else if (chapter === 106) {
    verse = getRandomVerse(17)
  } else if (chapter === 107) {
    verse = getRandomVerse(17)
  } else if (chapter === 108) {
    verse = getRandomVerse(17)
  } else if (chapter === 109) {
    verse = getRandomVerse(17)
  } else if (chapter === 110) {
    verse = getRandomVerse(17)
  } else if (chapter === 111) {
    verse = getRandomVerse(17)
  } else if (chapter === 112) {
    verse = getRandomVerse(17)
  } else if (chapter === 113) {
    verse = getRandomVerse(17)
  } else if (chapter === 114) {
    verse = getRandomVerse(17)
  } else if (chapter === 115) {
    verse = getRandomVerse(17)
  } else if (chapter === 116) {
    verse = getRandomVerse(17)
  } else if (chapter === 117) {
    verse = getRandomVerse(17)
  } else if (chapter === 118) {
    verse = getRandomVerse(17)
  } else if (chapter === 119) {
    verse = getRandomVerse(17)
  } else if (chapter === 120) {
    verse = getRandomVerse(17)
  } else if (chapter === 121) {
    verse = getRandomVerse(17)
  } else if (chapter === 122) {
    verse = getRandomVerse(17)
  } else if (chapter === 123) {
    verse = getRandomVerse(17)
  } else if (chapter === 124) {
    verse = getRandomVerse(17)
  } else if (chapter === 125) {
    verse = getRandomVerse(17)
  } else if (chapter === 126) {
    verse = getRandomVerse(17)
  } else if (chapter === 127) {
    verse = getRandomVerse(17)
  } else if (chapter === 128) {
    verse = getRandomVerse(17)
  } else if (chapter === 129) {
    verse = getRandomVerse(17)
  } else if (chapter === 130) {
    verse = getRandomVerse(17)
  } else if (chapter === 131) {
    verse = getRandomVerse(17)
  } else if (chapter === 132) {
    verse = getRandomVerse(17)
  } else if (chapter === 133) {
    verse = getRandomVerse(17)
  } else if (chapter === 134) {
    verse = getRandomVerse(17)
  } else if (chapter === 135) {
    verse = getRandomVerse(17)
  } else if (chapter === 136) {
    verse = getRandomVerse(17)
  } else if (chapter === 137) {
    verse = getRandomVerse(17)
  } else if (chapter === 138) {
    verse = getRandomVerse(17)
  }

} else if (getWeightedRandomNum(collectionSpec)() === 'p') {
  const bookSpec = {
    moses: .4590,
    abraham: .2295,
    josephSmithMatthew: .0655,
    josephSmithHistory: .2295,
    articlesOfFaith: .0246
  };
}
