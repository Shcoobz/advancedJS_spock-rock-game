import PropTypes from 'prop-types';

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
