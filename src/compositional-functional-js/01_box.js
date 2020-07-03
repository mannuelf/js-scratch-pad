// create linear flow with container style types BOX

// declaritive style
/*
const nextCharForNumberString = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
}; */

// one line style, confusing
/*
const nextCharForNumberString = str =>
  String.fromCharCode(parseInt(str.trim()) + 1);
*/

const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
});

const nextCharForNumberString = str =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .map(c => c.toLowerCase());

const result = nextCharForNumberString("64");

// map is composition, it takes input to output and passes value along to the next map.
console.log(result);
