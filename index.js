import chalk from 'chalk';
import color from 'randomcolor';

const hueInput = process.argv[2];
const lumInput = process.argv[3];

const randomColor = color.randomColor({
  luminosity: lumInput,
  hue: hueInput,
});

function logRandomColor(str) {
  console.log(chalk.hex(randomColor).bold(str));
}

const squareOutput = `###############################
###############################
###############################
####                       ####
####      ${randomColor}          ####
####                       ####
###############################
###############################
###############################`;

logRandomColor(squareOutput);
