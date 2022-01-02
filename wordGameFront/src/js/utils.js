function map(x,in_min,in_max,out_min,out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export {
  map,
  alpha,
  wait
}
