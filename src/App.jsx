import { rules, choices, computerRandomChoice, displayRule } from './game';

import { useState } from 'react';
import Header from './components/Header';
import { startConfetti, stopConfetti, removeConfetti } from './confetti';

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
    </div>
  );
}

export default App;
