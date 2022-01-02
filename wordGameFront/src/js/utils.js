function map(x,in_min,in_max,out_min,out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getWordArray(word){
  const wordArray = [];
  for(let letter of word){
    wordArray.push({
      ltr: letter,
      isGuessed: letter != " " ? false : true,
    });
  }
  return wordArray;
}

const words=[
  "CANDY APPLE",
  "BANANA MILKSHAKE",
  "CAT NAP",
  "HOTDOG",
  "ELEPHANT TUSK",
  "FOX GO TO BED",
]

export {
  map,
  alpha,
  wait,
  getWordArray,
  words,
}
