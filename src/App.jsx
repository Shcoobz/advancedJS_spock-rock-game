import { useState } from 'react';

import Header from './components/Header';
import PlayerContainer from './components/PlayerContainer';
import ComputerContainer from './components/ComputerContainer';
import ResultRule from './components/ResultRule';

import { startConfetti, stopConfetti, removeConfetti } from './confetti';
import { rules, choices, computerRandomChoice, displayRule } from './game';

function App() {
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [resultRule, setResultRule] = useState('');
  const [resultText, setResultText] = useState('');

  function resetAll() {
    setScores({ player: 0, computer: 0 });
    setPlayerChoice('');
    setComputerChoice('');
    setResultRule('');
    setResultText('');
    stopConfetti();
    removeConfetti();
  }

  function updateScore(playerChoice) {
    const computerChoice = computerRandomChoice();
    setComputerChoice(computerChoice);
    displayRule(playerChoice, computerChoice);

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
    </div>
  );
}

export default App;
