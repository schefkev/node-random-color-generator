import chalk from 'chalk';
import color from 'randomcolor';

const hueInput = process.argv[2];
const lumInput = process.argv[3];

const ranColor = color.randomColor({
  luminosity: lumInput,
  hue: hueInput,
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

if (process.argv[2] === 'ask') {
  console.log('Which color and luminosity you wanna use?');
} else {
  logRandomColor(square);
}
