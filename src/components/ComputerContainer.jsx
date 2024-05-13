import PropTypes from 'prop-types';

/**
 * Functional component for displaying the computer's current game state in the game.
 * This includes the computer's score and the current choice (e.g., rock, paper, scissors, lizard, spock).
 * Additional icons are displayed for each possible choice, which could be styled to indicate the current choice.
 * @param {Object} props - Component props.
 * @param {number} props.score - The current score of the computer.
 * @param {string} props.choice - The current choice of the computer. This is expected to be one of the game's options.
 * @returns {React.Component} A container element with display elements for the computer's score and choice, along with icons for each game option.
 */
function ComputerContainer({ score, choice }) {
  return (
    <div className='computer-container' id='computer'>
      <h2>
        <span className='player-computer'>Computer: </span>
        <span id='computerScore'>{score}</span>
        <span className='choice' id='computerChoice'>
          {choice}
        </span>
      </h2>
      <i className='far fa-hand-rock' title='Rock' id='computerRock'></i>
      <i className='far fa-hand-paper' title='Paper' id='computerPaper'></i>
      <i className='far fa-hand-scissors' title='Scissors' id='computerScissors'></i>
      <i className='far fa-hand-lizard' title='Lizard' id='computerLizard'></i>
      <i className='far fa-hand-spock' title='Spock' id='computerSpock'></i>
    </div>
  );
}

ComputerContainer.propTypes = {
  score: PropTypes.number.isRequired,
  choice: PropTypes.string.isRequired,
};

export default ComputerContainer;
