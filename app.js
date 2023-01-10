import chalk from 'chalk';
import color from 'randomcolor';

const hueInput = () => {
  let x = process.argv[2];
  let stringToNumber = parseInt(x);
  if (typeof stringToNumber === 'string') {
    return process.argv[2];
  } else {
    return 'Invalid Hue';
  }
};
// hueInput();

const lumInput = () => {
  let x = process.argv[3];
  let stringToNumber = parseInt(x);
  if (typeof stringToNumber === 'string') {
    return process.argv[3];
  } else {
    return 'Invalid Luminosity';
  }
};
// lumInput();

const ranColor = color.randomColor({
  luminosity: lumInput(),
  hue: hueInput(),
});

function logRandomColor(str) {
  const log = console.log;
  log(chalk.hex(ranColor).bold(str));
}

// Stretch goals
/*
  If a user types 'ask' instead of a color name, print questions to ask the user for the name of the color and the luminosity.
*/
let square = `
###############################
###############################
###############################
####                       ####
####      ${ranColor}          ####
####                       ####
###############################
###############################
###############################`;

// if (process.argv[2] === 'ask') {
//   console.log('Which color and luminosity you wanna use?');
// } else {
//   logRandomColor(square);
// }

// Stretch Goals

/*
  If a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box
*/
const inputHeight = () => {
  if (typeof process.argv[2] === 'number') {
    return process.argv[2];
  }
};
const inputWidth = () => {
  if (typeof process.argv[3] === 'number') {
    return process.argv[3];
  }
};

function userInputHeightWidth() {
  for (let i = 0; i < inputHeight; i++) {
    let pattern = '';
    for (let j = 0; j < inputWidth; j++) {
      if (i === 0 || i === inputHeight - 1) {
        pattern += '#';
      } else if (j === 0 || j === inputWidth - 3) {
        pattern += '#';
      } else if (i > 2 && i < inputHeight - 3 && j > 3 && j < inputWidth - 4) {
        pattern += ' ';
      } else {
        pattern += '#';
      }
    }
    console.log(pattern);
  }
}

userInputHeightWidth();

function colorGenerator() {
  hueInput(logRandomColor(square));
  lumInput(logRandomColor(square));
}
// colorGenerator();
console.log(hueInput());
// console.log(lumInput());
