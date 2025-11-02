const prompt = require('prompt-sync')();
const madlib = require('./madlib.js');

// TODO: Replace the hardcoded values with prompt calls
const main = () => {
  const profession = prompt('Choose a profession: ');
  const name = prompt('Choose a name: ');
  const verb = prompt('Choose a verb: ');
  const pet = prompt('Choose a pet: ');
  const storyContinuesResponse = prompt('Choose whether the story continues. Y or N: ');
  const storyContinues = storyContinuesResponse.toUpperCase() === "Y";

  madlib(profession, name, verb, pet, storyContinues);
};

main();