import PropTypes from 'prop-types';

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
