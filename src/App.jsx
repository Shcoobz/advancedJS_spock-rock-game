import { useState } from 'react';
import Header from './components/Header';
import PlayerContainer from './components/PlayerContainer';
import ComputerContainer from './components/ComputerContainer';
import ResultRule from './components/ResultRule';
import ResultText from './components/ResultText';
import { startConfetti, stopConfetti, removeConfetti } from './confetti';

function App() {
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [resultRule, setResultRule] = useState('');
  const [resultText, setResultText] = useState('');

  const resetAll = () => {
    setScores({ player: 0, computer: 0 });
    setPlayerChoice('');
    setComputerChoice('');
    setResultRule('');
    setResultText('');
    stopConfetti();
    removeConfetti();
  };





  return (
    <div className='game-container'>
      <Header resetAll={resetAll} />
    </div>
  );
}

export default App;
