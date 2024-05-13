/**
 * Constants for managing the game rules, computer choice logic, and confetti display functionality.
 */

import { useState } from 'react';

import Header from './components/Header';
import PlayerContainer from './components/PlayerContainer';
import ComputerContainer from './components/ComputerContainer';
import ResultRule from './components/ResultRule';
import ResultText from './components/ResultText';

import { startConfetti, stopConfetti, removeConfetti } from './utils/confetti';
import { rules, computerRandomChoice, displayRule } from './utils/game';

/**
 * Main application component for a game, managing state and logic for player and computer choices, scores, and game results.
 */
function App() {
  /**
   * Stores the current scores for both player and computer.
   * @const {Object} scores - Object with properties 'player' and 'computer' indicating their respective scores.
   */
  const [scores, setScores] = useState({ player: 0, computer: 0 });

  /**
   * Stores the current choices of both the player and the computer.
   * @const {string} playerChoice - The current choice of the player.
   * @const {string} computerChoice - The current choice of the computer.
   */
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  /**
   * Stores the rule and text result of the current game round.
   * @const {string} resultRule - Textual representation of the rule that decided the outcome.
   * @const {string} resultText - Textual feedback about the game result (win/lose/tie).
   */
  const [resultRule, setResultRule] = useState('');
  const [resultText, setResultText] = useState('');

  /**
   * Resets all game states to their initial values.
   */
  function resetAll() {
    setScores({ player: 0, computer: 0 });
    setPlayerChoice('');
    setComputerChoice('');
    setResultRule('');
    setResultText('');
    stopConfetti();
    removeConfetti();
  }

  /**
   * Updates the scores based on the player's and computer's choices.
   * @param {string} playerChoice - The player's choice.
   */
  function updateScore(playerChoice) {
    const computerChoice = computerRandomChoice();
    setComputerChoice(computerChoice);

    const ruleText = displayRule(playerChoice, computerChoice);
    setResultRule(ruleText);

    if (playerChoice === computerChoice) {
      setResultText("It's a tie.");
      return;
    }

    if (rules[playerChoice]?.[computerChoice]) {
      startConfetti();
      setResultText('You Won!');
      setScores((prevScores) => ({
        ...prevScores,
        player: prevScores.player + 1,
      }));
    } else {
      setResultText('You Lost!');
      setScores((prevScores) => ({
        ...prevScores,
        computer: prevScores.computer + 1,
      }));
    }
  }

  /**
   * Handles player's choice selection and triggers the score update logic.
   * @param {string} choice - The player's selected choice.
   */
  function select(choice) {
    setPlayerChoice(choice);
    updateScore(choice);
  }

  return (
    <div className='game-container'>
      <Header resetAll={resetAll} />
      <PlayerContainer score={scores.player} choice={playerChoice} onSelect={select} />
      <ComputerContainer score={scores.computer} choice={computerChoice} />
      <ResultRule rule={resultRule} />
      <ResultText text={resultText} />
    </div>
  );
}

export default App;
