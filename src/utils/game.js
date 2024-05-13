const rules = {
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  paper: { rock: 'covers', spock: 'disproves' },
  rock: { lizard: 'crushes', scissors: 'crushes' },
  lizard: { spock: 'poisons', paper: 'eats' },
  spock: { scissors: 'smashes', rock: 'vaporizes' },
};

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function computerRandomChoice() {
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
