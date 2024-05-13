import PropTypes from 'prop-types';

/**
 * Functional component for displaying the player's current game state in the game.
 * This component shows the player's score and current choice, and provides interactive icons for making a game choice.
 * Each icon represents a different game option (rock, paper, scissors, lizard, spock) and can be clicked to select that option.
 * @param {Object} props - Component props.
 * @param {number} props.score - The current score of the player.
 * @param {string} props.choice - The current choice of the player. This choice updates visually in the interface.
 * @param {Function} props.onSelect - Callback function that updates the game state based on the player's selection.
 * @returns {React.Component} A container with game icons that can be interacted with to make a game choice.
 */
function PlayerContainer({ score, choice, onSelect }) {
  return (
    <div className='player-container' id='player'>
      <h2>
        <span className='player-human'>You: </span>
        <span id='playerScore'>{score}</span>
        <span className='choice' id='playerChoice'>
          {choice}
        </span>
      </h2>
      <i
        className='far fa-hand-rock'
        title='Rock'
        id='playerRock'
        onClick={() => onSelect('rock')}></i>
      <i
        className='far fa-hand-paper'
        title='Paper'
        id='playerPaper'
        onClick={() => onSelect('paper')}></i>
      <i
        className='far fa-hand-scissors'
        title='Scissors'
        id='playerScissors'
        onClick={() => onSelect('scissors')}></i>
      <i
        className='far fa-hand-lizard'
        title='Lizard'
        id='playerLizard'
        onClick={() => onSelect('lizard')}></i>
      <i
        className='far fa-hand-spock'
        title='Spock'
        id='playerSpock'
        onClick={() => onSelect('spock')}></i>
    </div>
  );
}

PlayerContainer.propTypes = {
  score: PropTypes.number.isRequired,
  choice: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PlayerContainer;
