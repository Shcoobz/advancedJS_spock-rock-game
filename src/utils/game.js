/**
 * Game rules defining interactions between different choices.
 * Each choice key maps to an object where the key is a defeated choice and the value is the method of defeat.
 * @const {Object<string, Object<string, string>>} rules - Maps each choice to its winning interactions.
 */
const rules = {
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  paper: { rock: 'covers', spock: 'disproves' },
  rock: { lizard: 'crushes', scissors: 'crushes' },
  lizard: { spock: 'poisons', paper: 'eats' },
  spock: { scissors: 'smashes', rock: 'vaporizes' },
};

/**
 * Array of possible choices in the game.
 * @const {string[]} choices - Possible game choices including rock, paper, scissors, lizard, and spock.
 */
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/**
 * Selects a random choice for the computer player from the available game choices.
 * @returns {string} Randomly selected choice from the choices array.
 */
function computerRandomChoice() {
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

/**
 * Capitalizes the first letter of a given string.
 * @param {string} string - The string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Determines the rule text based on the choices of the player and the computer.
 * If one choice defeats another, it returns a formatted HTML string representing the outcome with appropriate styling.
 * @param {string} playerChoice - The choice made by the player.
 * @param {string} computerChoice - The choice made by the computer.
 * @returns {string} Formatted HTML string depicting the result of the interaction or a default message if no interaction occurs.
 */
function displayRule(playerChoice, computerChoice) {
  const playerWinningRule = rules[playerChoice]?.[computerChoice];
  const computerWinningRule = rules[computerChoice]?.[playerChoice];

  let ruleText = 'Nothing happens.';
  if (playerWinningRule) {
    ruleText = `<span style="color: var(--player-color);">${capitalizeFirstLetter(
      playerChoice
    )}</span> ${playerWinningRule} <span style="color: var(--computer-color);">${capitalizeFirstLetter(
      computerChoice
    )}</span>.`;
  } else if (computerWinningRule) {
    ruleText = `<span style="color: var(--computer-color);">${capitalizeFirstLetter(
      computerChoice
    )}</span> ${computerWinningRule} <span style="color: var(--player-color);">${capitalizeFirstLetter(
      playerChoice
    )}</span>.`;
  }
  return ruleText;
}

export { rules, choices, computerRandomChoice, displayRule };
